import React, { Component } from "react";
import { signup } from "../actions/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from "react-router-dom"

class SignUp extends Component {

    state = {
        name: "",
        email: "",
        password: ""
    }

    signup = () => {
        let userdata = {
            "user": {
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password
            }
        }
        this.props.signup(userdata)
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.signup()
    }
    render() {

        if (this.props.isRegistered) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <div>
                <form onSubmit={this.handleOnSubmit} className="col-md-10 offset-md-1 form-group">
                    <input className="form-control loginInp mt-2" type="text" placeholder="Enter Name" onChange={(elem) => this.setState({ name: elem.target.value })} />
                    <input className="form-control loginInp mt-2" type="text" placeholder="Enter Email" onChange={(elem) => this.setState({ email: elem.target.value })} />
                    <input className="form-control loginInp mt-2" type="number" placeholder="Enter Number" onChange={(elem) => this.setState({ password: elem.target.value })} />
                    <button className="Btn py-2 px-3 mt-2">Sign up</button>
                </form>
                <div className="font-weight-lighter text-white text-center mt-3">
                    Already have an account ? <Link to="/">Login</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("full state", state)
    return {
        isRegistered: state.auth.isRegistered
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signup }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)