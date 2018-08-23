import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-light navbar-expand-sm bg-light sticky-top my-navbar">
                <div className="container-fluid">
                            <ul className="sticky-top my-nav">
                                <li className="my-nav-item">My Account </li>
                                <li className="my-nav-item"><i className="fas fa-shopping-cart"></i> </li>
                                <li className="my-nav-item"><i className="fas fa-bell"></i></li>
                            </ul>
                            <button className="navbar-toggler my-navbar-toggler" type="button"
                                data-toggle="collapse" data-target="#navbarResponsive">
                                <span className="navbar-toggler-icon"> </span>
                            </button>
                            
                            <div className="collapse navbar-collapse my-navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto my-navbar-nav">
                                    <li className="nav-item my-nav-item">Signin or Register </li>
                                    <li className="nav-item my-nav-item">Daily Deals </li>
                                    <li className="nav-item my-nav-item">Sell </li>
                                    <li className="nav-item my-nav-item">Help & Contact </li>
                                </ul>
                            </div>          
                </div>
            </div>
        )
    }
}

export default Navbar;