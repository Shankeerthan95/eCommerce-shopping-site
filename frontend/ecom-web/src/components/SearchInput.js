import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
    render() {
        return (
            <div className="my-search-box">
                <div className="search">
                    <input type="text" className="my-search-input"/>
                    <select className="form-control" id="sel1">
                        <option>All Catergories</option>
                        <option>Antiques</option>
                        <option>Arts</option>
                        <option>Baby</option>
                        <option>Books</option>
                        <option>Business & Industrial</option>
                        <option>Cameras & Photo</option>
                        <option>Cell Phones & Accesories</option>
                        <option>Clothing, Shoes & Accesories</option>
                        <option>Coins & paper money</option>
                        <option>Collecitbles</option>
                        <option>Computer/tablets & Networking</option>
                        <option>Consumer Electronics</option>
                        <option>Crafts</option>
                        <option>Dolls & Bears</option>
                        <option>DVD & Movies</option>
                        
                    </select>

                </div>
            </div>)
    }
}

export default SearchInput;