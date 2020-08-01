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

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { getAccessToken } from "./accessToken";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  request: (operation) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      operation.setContext({
        headers: {
          authorization: `bearer ${accessToken}`
        }
      })
    }
  }
})


ReactDOM.render(
  <ApolloProvider client={client}>


    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
