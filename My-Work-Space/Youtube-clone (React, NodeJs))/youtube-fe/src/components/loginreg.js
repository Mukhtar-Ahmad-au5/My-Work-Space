import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./login"
import SignUp from "./signup"

class User extends Component {

    

    // signOut = () => {
    //     this.props.logout()
    // }


    render() {

        return (
            <div>
                <div id="loginregROW" className="row">
                    <div className="col-md-4 loginregCOL">
                        <br/><br/>
                        <h4 className="mt-2 ml-5"><i className="fa fa-youtube-play fa-3x text-light"></i></h4>
                        <h3 className="ml-5 text-white font-weight-bold">The new Youtube Music is coming soon.</h3>
                        <br/><br/><br/><br/>
                        <Route path="/" exact>
                            <Login/>
                        </Route>
                        <Route path="/signup" exact>
                            <SignUp/>
                        </Route>
                       <br/><br/><br/><br/><br/>
                        <footer className="text-center">
                        <small className="text-secondary"><strong> &copy; 2020 Youtube. All Rights Reserved.</strong></small>
                            <div className="text-secondary "> Terms &nbsp;&nbsp; Privacy &nbsp;&nbsp; Policy</div>
                        </footer> 
                    </div>
                        <div className="col-md-6 p-0">
                            <img height="790px" src={require("./image-3.jpg")} alt=""/>
                        </div>
                </div>
            </div>
        )
    }
}

export default User
