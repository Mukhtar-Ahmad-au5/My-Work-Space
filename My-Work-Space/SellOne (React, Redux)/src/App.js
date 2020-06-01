import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="body">
          <nav className="navbar">
          <h5 className="logo mt-1"><i className="fa fa-handshake-o mr-2" aria-hidden="true"></i>
              <span>SellOne App</span></h5>
          </nav>
          <AddProduct />
          <br/>
          <ProductList />
      </div>
        )
      }
    
    }
    
    export default App;
