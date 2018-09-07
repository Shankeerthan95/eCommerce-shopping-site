import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar/>
        <Searchbar/>
      </div>
    );
  }
}

export default App;
