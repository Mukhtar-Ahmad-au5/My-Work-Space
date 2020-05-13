import React, { Component } from 'react';
import { connect } from "react-redux";

class ProductList extends Component {

    state = {
        City: "Bengaluru",
        Category: "Mobiles",
        Price: ""
    }

    ProductFilter = (ProductList) => {
        ProductList = ProductList.filter(Product => {
            if (this.state.City === Product.data.City && this.state.Category === Product.data.Category && 
                (this.state.Price === "" || parseInt(this.state.Price) >= parseInt(Product.data.Price)))
                return true
        })
        return ProductList;
    }

    render() {
        return (
            <div className="container shadow bg-white">
                <h4 className="font-weight-lighter pt-3 text-center">Product List</h4><hr className="w-75"/>
                <div className="addCon text-center">
                    <div className="addChildCon col-md-3" for="exampleFormControlSelect1">
                       <strong>City</strong> 
                    <select required className="form-control" id="exampleFormControlSelect1" onChange={(elem) => this.setState({ City: elem.target.value })}>
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
                    <div className="addChildCon col-md-3" for="exampleFormControlSelect1">
                       <strong>Category</strong>
                    <select required className="form-control" id="exampleFormControlSelect1" onChange={(elem) => this.setState({ Category: elem.target.value })}>
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
                    <div className="addChildCon col-md-3" for="exampleFormControlSelect1">
                       <strong>Price</strong>
                    <input type="number" className="form-control" placeholder="Price" onChange={(elem) => this.setState({ Price: elem.target.value })} />
                    </div>
                </div>
                <div className="container">
                    <div>
                        {!(this.ProductFilter(this.props.ProductList).length === 0) && 
                            <table className="table">
                            <thead className="bg-dark text-white text-center">
                                <th>Product Name</th>
                                <th>Product Category</th>
                                <th>Product Price</th>
                                <th>Product Condition</th>
                            </thead>
                            <tbody>
                                {this.ProductFilter(this.props.ProductList).map((elem, index) => {
                                if(elem.data.Bargain === true) {
                                return <tr className="alert alert-success text-center">
                                    <td>{elem.data.ProductName}</td>
                                    <td>{elem.data.Category}</td>
                                    <td>{elem.data.Price}</td>
                                    <td>{elem.data.Condition}</td>
                                </tr>
                                }
                                else {
                                    return <tr className="alert alert-info text-center">
                                    <td>{elem.data.ProductName}</td>
                                    <td>{elem.data.Category}</td>
                                    <td>{elem.data.Price}</td>
                                    <td>{elem.data.Condition}</td>
                                </tr>
                                }
                            })}
                            </tbody>
                        </table>}
                            {this.ProductFilter(this.props.ProductList).length === 0 && 
                                <h3 className="text-center text-danger bg-light py-3">No Products Found</h3>
                            }
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("current state", state)
    return {
        ProductList: state.appReducer.ProductList
    }
}


export default connect(mapStateToProps)(ProductList)