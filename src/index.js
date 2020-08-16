import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'fontsource-roboto';
import './fonts/Raleway-Regular.ttf'
import './fonts/Raleway-Bold.ttf'
import './fonts/Raleway-Light.ttf'
import './fonts/Raleway-SemiBold.ttf'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./sass/style.scss";
//import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { getAccessToken, setAccessToken, accessToken } from "./accessToken";



import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';


import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from "jwt-decode"


import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./reducers/rootReducer.js";

import { createUploadLink } from "apollo-upload-client";
import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

import {URI, SUBURI} from "./constants";



const cache = new InMemoryCache({});

const link = createUploadLink({ uri: `${URI}graphql`, credentials: "include" })


const subToken = getAccessToken();
const wsLink = new WebSocketLink({
  uri: `${SUBURI}graphql`,
  options: {
    reconnect: true,
    connectionParams: { 
      authToken: subToken 
    },
  }
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  link,
);


const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle;
    Promise.resolve(operation)
      .then((operation) => { // get access token and send it in the header
        const accessToken = getAccessToken();
        if (accessToken) {
          operation.setContext({
            headers: {
              authorization: `bearer ${accessToken}`
            }
          })
        }
      })
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

const client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: 'accessToken',
      isTokenValidOrUndefined: () => {
        const token = getAccessToken();
        //console.log("token to be validated", token)

        if (!token) {
          return true;
        }

        try {
          const { exp } = jwtDecode(token);
          if (Date.now() >= exp * 1000) { // if the token has expired
            console.log("token expired")
            return false;
          } else {
            return true; // the token hasn't expired
          }
        } catch {
          return false;
        }
      },
      fetchAccessToken: async () => { //refresh token route is being called
        return fetch(`${URI}refresh_token`, {
          method: "POST",
          credentials: "include"
        });
      },
      handleFetch: accessToken => {
        //console.log("access token to be set", accessToken)
        //setAccessToken(accessToken);
      },
      handleResponse: (operation, accessTokenField) => async response => { // new access token is set within app
        console.log("token is being refreshed")
        // here you can parse response, handle errors, prepare returned token to
        // further operations

        // returned object should be like this:
        // {
        //    access_token: 'token string here'
        // }
        const resJSON = await response.json();
        console.log(resJSON.accessToken)
        setAccessToken(resJSON.accessToken);
        //console.log(getAccessToken())
        return {
          accessToken: resJSON.accessToken
        }
      },
      handleError: err => {
        console.warn('Your refresh token is invalid. Try to relogin');
        console.log(err);
      }
    }),
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors);
      console.log(networkError);
    }),
    requestLink,
    splitLink
  ]),
  cache
});


const store = createStore(RootReducer);

ReactDOM.render(
  <ApolloProvider client={client}>


    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
