import React, { Component } from 'react';
import ReactTimeAgo from "react-time-ago";
import moment from "moment";

export default class GetUserRepo extends Component {
    render() {
        const selected = moment(this.props.ele.upadated_at)
        return (
            <div className="border-bottom py-2 d-flex mb-2 mt-2">
                <div className="col-10">
                    <div className="text-primary" style={{ fontSize: "20px" }}>{this.props.ele.name}</div>
                    <div className="text-muted mt-2" style={{ fontSize: "13px" }}>{this.props.ele.description}</div>
                    <div className="d-flex text-muted mt-3 mb-1" style={{ fontSize: "12px" }}>
                        <div><span className="px-2 py-0 mr-1 bg-danger" style={{ borderRadius: "50%" }}></span>{this.props.ele.language}</div>
                        <div><i className="fa fa-star-o ml-3 mr-2" aria-hidden="true"></i>{this.props.ele.stargazers_count}</div>
                        <div><i className="fa fa-code-fork ml-3 mr-2" aria-hidden="true"></i>{this.props.ele.forks}</div>
                        <ReactTimeAgo className="ml-3 mr-2" date={selected}/>
                    </div>
                </div>
                <div className="justify-content-end"><button style={{ border: "1px solid #e2e2e2", fontWeight: "600", fontSize: "13px" }}
                    className="rounded p-2 mt-2">Follow</button></div>
            </div>
        );
    }
}