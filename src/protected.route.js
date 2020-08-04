import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import { getAccessToken } from "./accessToken";


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={props => {
                //if(auth.isAuthenticated()) {
                if (getAccessToken()) {
                    return <Component {...props} />;
                } else {
                    console.log(getAccessToken())
                    return <Redirect to={
                        {
                            path: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}

        />
    )
}