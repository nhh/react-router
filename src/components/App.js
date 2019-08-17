import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Navigation} from "./shared/Navigation";
import {Routes} from "../index";

export class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Navigation/>
                    <section className={"section"}>
                        {
                            Routes.map(route => <Route key={route.path} exact={route.exact} path={route.path} component={route.component}></Route>)
                        }
                    </section>
                </BrowserRouter>
            </React.Fragment>
        )
    }

}