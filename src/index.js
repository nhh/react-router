import {App} from "./components/App";
import ReactDOM from "react-dom";
import React from "react";

import "./style/index.scss"
import {WaddupPage} from "./components/pages/WaddupPage";

export const Routes = [
    {
        path: "/",
        component: () => <div className={"box"}>Hallo Welt</div>,
        exact: true
    },
    {
        path: "/box",
        component: () => <div className={"box"}>Hallo Box</div>,
        exact: true
    },
    {
        path: "/waddup",
        component: (props) => <WaddupPage {...props}></WaddupPage>,
        exact: false
    }
];

if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/assets/service-worker.js');
    });
}

ReactDOM.render(<App/>, document.getElementById('root'));