import React, { Component } from 'react';
import './Searchbar.css';

import SearchInput from './SearchInput';


class Searchbar extends Component {
    render() {
        return (
            <div className="my-search-bar bg-light">
                <div className="container-fluid">
                    <div className="row my-row">
                        <div className="col-xs-3 my-col">
                            <div className="my-navbar-brand">
                                <a href="" className="navbar-brand my-nav-link"> <span className="fas fa-shopping-bag shopping-bag"> </span>eSy Shopping</a>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div>
                                <SearchInput/>
                            </div>  
                        </div>
                        <div className="col-xs-4">

                        </div>
                    </div>

                </div>
            </div>
        );

    }
};

export default Searchbar;