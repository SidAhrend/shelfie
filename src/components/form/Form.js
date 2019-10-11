import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
        imgUrl: '',
        name: '',
        price: 0
    };
  }

  handleCancel = () => {
      this.refs.productName.value= '';
      this.refs.imageUrl.value = '';
      this.refs.price.value = '0';
  };

  handleInputImgUrl = e => {
    this.setState({
    imgUrl: e.target.value,
    });
  };
  handleInputName = e => {
    this.setState({
    name: e.target.value,
    });
  };
  handleInputPrice = e => {
    this.setState({
    price: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="Form">
        <p>Image Url:</p>
        <input 
            ref = 'imageUrl'
            placeholder='type here'
            onChange={e => this.handleInputImgUrl(e)}
            />

        <p>Product Name:</p>
        <input
            ref = 'productName'
            placeholder='type here'
            onChange={e => this.handleInputName(e)}
        />

        <p>Price:</p>
        <input 
        ref = 'price'
        placeholder='0'
        onChange={e => this.handleInputPrice(e)}
        />
        <div className="form-button-box">
          <button onClick={() => this.handleCancel()}>Cancel</button>
          <button >Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
