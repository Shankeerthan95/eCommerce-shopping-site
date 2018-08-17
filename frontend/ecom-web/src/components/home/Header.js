import React , { Component } from 'react';
import './styles/Header.css';

import Navbar from './Navbar';

class Header extends Component 
{
    render()
    {
        return(
            <div className="container-fluid fixed-top header-fluid">
                <Navbar/>
            </div>
        );
    }
}


export default Header;
