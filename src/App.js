import React, { Component } from "react";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/form/Form";
// import Product from "./components/product/Product";

import "./App.css";
import axios from "axios";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.inventory
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard />
        {this.state.inventory}
        {/* <Product /> is being rendered within dashboard */}
      </div>
    );
  }
}

export default App;
