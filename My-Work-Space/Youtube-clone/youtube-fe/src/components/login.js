import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login, logout } from '../actions/actions'
import { bindActionCreators } from 'redux'

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    signIn = () => {
        let userdata = {
            "email": this.state.email,
            "password": this.state.password,
        }
        this.props.login(userdata)
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.signIn()
    }

    componentDidMount() {
        
    }
    

    render() {

        if (this.props.isLoggedin) {
            return (
                <Redirect to="/home" />
            )
        }

        return (
            <div>
                <form onSubmit={this.handleOnSubmit} className="col-md-10 offset-md-1 form-group">
                    <input className="loginInp form-control mt-2" type="text" placeholder="Enter Name" onChange={(elem) => this.setState({ email: elem.target.value })} />
                    <input className="loginInp form-control mt-2" type="text" placeholder="Enter Email" onChange={(elem) => this.setState({ password: elem.target.value })} />
                    <button className="Btn py-2 px-3 mt-2">Sign in</button>
                </form>
                <div className="font-weight-lighter text-white text-center mt-3">
                    Don't have an Account ? <Link to="/signup">Register</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("full state", state)
    return {
        isLoggedin: state.auth.isLoggedin
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login, logout }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)