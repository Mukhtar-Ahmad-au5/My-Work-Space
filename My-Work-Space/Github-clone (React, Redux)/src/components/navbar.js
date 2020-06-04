import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav style={{ backgroundColor: "#24292e" }} className="d-flex py-2">
                <div className="d-flex justify-content-around col-6 mt-1">
                    <div><Link to="/"><i className="fa fa-2x fa-github text-white" aria-hidden="true"></i></Link></div>
                    <div><input style={{ height: "30px" }} type="search" placeholder="Search or jump to.."
                        className="form-control bg-dark border-0" /></div>
                    <div className="mt-1 font-weight-bold text-white">Pull Requests</div>
                    <div className="mt-1 font-weight-bold text-white">Issues</div>
                    <div className="mt-1 font-weight-bold text-white">Marketplace</div>
                    <div className="mt-1 font-weight-bold text-white">Explore</div>
                </div>
                <div className="d-flex justify-content-end col-6">
                        <div className="mt-2 mr-1 font-weight-bold text-white"><i className="fa fa-bell-o text-white"
                        aria-hidden="true"></i></div>
                        <div className="mt-2 ml-3 font-weight-bold text-white"><i className="fa fa-plus text-white"
                        aria-hidden="true"></i><i className="fa ml-1 fa-caret-down text-white"
                        aria-hidden="true"></i></div>
                        <div className="mt-2 ml-3"><img className="rounded" height="25" width="25" 
                        src="https://avatars3.githubusercontent.com/u/56306064?s=60%26v=4" alt="defaultImg"/>
                        <i className="fa ml-1 fa-caret-down text-white" aria-hidden="true"></i></div>
                </div>
            </nav>
        );
    }
}
