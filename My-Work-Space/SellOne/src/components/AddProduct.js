import React, { Component } from 'react';
import { connect } from "react-redux";
import { addProduct } from '../actions/action';
import { bindActionCreators } from 'redux';

class AddProduct extends Component {
  state = {
    ProductName: "",
    Category: "Mobiles",
    Condition: "Mint",
    Bargain: false,
    Price: "",
    City: "Bengaluru",
    isValidated: false
  }


  addData = () => {
    let shopData = {
      "data": {
        "ProductName": this.state.ProductName,
        "Category": this.state.Category,
        "Condition": this.state.Condition,
        "Bargain": this.state.Bargain,
        "Price": this.state.Price,
        "City": this.state.City,
      }
    }
    this.props.addProduct(shopData)
  }

  isNameValid = (e) => {
    let valid = Boolean(e.target.value && this.state.Price)
    this.setState({
      isValidated: valid,
      ProductName: e.target.value
    })
  }
  isPriceValid = (e) => {
    let valid = Boolean(e.target.value && this.state.ProductName)
    this.setState({
      isValidated: valid,
      Price: e.target.value
    })
  }


  handleOnSubmit = (e) => {
    e.preventDefault()
    this.addData()
    this.setState({
      ProductName: "",
      Category: "Mobiles",
      Condition: "Mint",
      Bargain: false,
      Price: "",
      City: "Bengaluru",
      isValidated: false
    })
  }
  render() {
    console.log("local state", this.state)
    return (
      <div>
        <br /><br />
        <div className="container shadow bg-white">
          <h4 className="font-weight-lighter pt-3 text-center">Add Product To List</h4><hr className="w-75" />
          <div className="addCon">
            {
              <form onSubmit={this.handleOnSubmit}>
                <div className="addCon text-center">
                  <div className="addChildCon col-md-2">
                    <strong>Product</strong>
                    <input required type="text" value={this.state.ProductName} className="form-control" placeholder="Product Name" onChange={(event) => this.isNameValid(event)} />
                  </div>
                  <div className="addChildCon" for="exampleFormControlSelect1">
                    <strong>Category</strong>
                    <select required value={this.state.Category} className="form-control" id="exampleFormControlSelect1" onChange={(elem) => this.setState({ Category: elem.target.value })}>
                      <option value="Mobiles">Mobiles</option>
                      <option value="Laptops">Laptops</option>
                      <option value="Desktops">Desktops</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Cutlery">Cutlery</option>
                      <option value="Automobiles">Automobiles</option>
                      <option value="Books">Books</option>
                      <option value="Clothes">Clothes</option>
                    </select>
                  </div>
                  <div className="addChildCon" for="exampleFormControlSelect1">
                    <strong>Condition</strong>
                    <select required value={this.state.Condition} className="form-control" id="exampleFormControlSelect1" onChange={(elem) => this.setState({ Condition: elem.target.value })}>
                      <option value="Mint">Mint</option>
                      <option value="Very Good">Very Good</option>
                      <option value="Good">Good</option>
                      <option value="Decent">Decent</option>
                      <option value="Poor">Poor</option>
                      <option value="Very Poor">Very Poor</option>
                    </select>
                  </div>
                  <div className="addChildCon">
                    <strong>Price</strong>
                    <input required type="number" value={this.state.Price} className="form-control" placeholder="Price" onChange={(event) => this.isPriceValid(event)} />
                  </div>
                  <div className="addChildCon">
                    <strong>Bargain</strong>
                    <div>
                      <label className="switch">
                        <input type="checkbox" checked={this.state.Bargain} onChange={() => this.setState({ Bargain: !this.state.Bargain })} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div className="addChildCon col-md-2" for="exampleFormControlSelect1">
                    <strong>City</strong>
                    <select required value={this.state.City} className="form-control" id="exampleFormControlSelect1" onChange={(elem) => this.setState({ City: elem.target.value })}>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Vadodara">Vadodara</option>
                      <option value="Agra">Agra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Patna">Patna</option>
                    </select>
                  </div>
                  <div className="addChildCon">
                    <br/>
                    <button disabled={!this.state.isValidated} className="form-control btn btn-danger">Add</button>
                  </div>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("current state", state)
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addProduct }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)


