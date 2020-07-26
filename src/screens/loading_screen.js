import React from "react";
import Loader from 'react-loader-spinner'
export default function LoadingScreen() {
    return (
        <div id="loading_screen">
            <Loader
                type="ThreeDots"
                color="#337CA0"
                height={50}
                width={50}

            />
        </div>
    );

}