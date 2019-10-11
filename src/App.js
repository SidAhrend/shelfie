import React, {Component} from "react";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/form/Form";
import Product from "./components/product/Product";

import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }
    
  render(){
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard />
        {/* <Product /> is being rendered within dashboard */}
      </div>
    );
  }
}

export default App;
