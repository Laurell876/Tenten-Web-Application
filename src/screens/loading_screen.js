import React from "react";
import {Spinner} from "react-bootstrap";



export default function LoadingScreen() {
    return (
        <div id="loading_screen">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );

}