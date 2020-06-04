import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class SearchUsers extends Component {
    render() {
        return (
            <li className="border-bottom my-2 py-2">
                <Link to={{pathname:`/user/${this.props.ele.login}`, state:{userinfo:this.props.ele}}}>
                <span><img className="rounded" height="50" width="50" src={this.props.ele.avatar_url} alt="githubuser"/></span>
                <span style={{ position: 'absolute', left: "10%" }}>
                    <div style={{ fontSize: "20px" }}>Name</div>
                    <div style={{ fontSize: "14px" }}>{this.props.ele.login}</div>
                </span></Link>
                <span style={{position:"relative", left:"50%"}}><button style={{ border: "1px solid #e2e2e2", fontWeight: "600", fontSize: "13px" }}
                 className="rounded p-2 mt-2">Follow</button></span>
            </li>
        );
    }
}
