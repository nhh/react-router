import {NavLink} from "react-router-dom";
import React from "react";


export class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleNavbar = () => {
        const isOpen = this.state.isOpen;
        this.setState({isOpen: !isOpen})
    };

    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                    </a>

                    <a onClick={this.toggleNavbar} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <NavLink to="/" className={"navbar-item"} activeClassName='is-active'>About</NavLink>

                        <NavLink to="/box" className={"navbar-item"} activeClassName='is-active'>About</NavLink>

                        <NavLink to="/waddup/gallery/0" className={"navbar-item"} activeClassName='is-active'>About</NavLink>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        );
    }

}