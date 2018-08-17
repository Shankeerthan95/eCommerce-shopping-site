import React, { Component } from 'react';
import './styles/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md bg-light sticky-top my-navbar">
                <ul className="navbar-nav">
                    <li className="nav-item inline active">
                        Hi! <a href="">Sigin</a> or <a href="">Register </a>
                    </li>
                    <li className="nav-item inline">
                        <a href="" >Daily Deals </a>
                    </li>
                    <li className="nav-item inline">
                        <a href="">Sell</a>
                    </li>
                    <li className="nav-item inline">
                        <a href="">Help & Contact </a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a href="">My Account</a></li>
                    <li className="nav-item"><i class="fas fa-bell"></i> </li>
                    <li className="nav-item"><i class="fas fa-shopping-cart"></i> </li>
                </ul>
            </nav>
        );
    }
}


export default Navbar;