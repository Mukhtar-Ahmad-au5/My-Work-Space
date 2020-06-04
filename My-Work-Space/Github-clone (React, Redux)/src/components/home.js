import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SearchedUsers from "./searchedusers";
import { searchUsers } from "../actions/action";

class Home extends Component {

    state = {
        userName: ""
    }
    render() {
        return (
            <div>
                <h5 style={{ position: "relative", left: "7%", marginTop: "1%" }}><i className="fa fa-2x mr-2 fa-github-square"
                    aria-hidden="true"></i><span style={{ position: "absolute", top: "20%" }}>Github</span></h5>
                <nav style={{ position: "absolute", top: "15%", width: "100%" }}>
                    <div style={{ position: "relative", marginLeft: "10%" }} className="nav nav-tabs" id="nav-tab" role="tablist">
                        <div className="nav-item nav-link" id="nav-home-tab" data-toggle="tab"
                            href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                            <i className="fa fa-file-archive-o text-muted" aria-hidden="true"></i>
                            <span className="text-secondary ml-2 mr-1">Repositories</span>
                            <span style={{ padding: "3px", backgroundColor: "#e2e2e2", fontSize: "11px", fontWeight: "700", borderRadius: "20px" }}>436</span></div>
                        <div className="nav-item nav-link" id="nav-home-tab" data-toggle="tab"
                            href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                            <i className="fa fa-cube text-muted" aria-hidden="true"></i>
                            <span className="text-secondary ml-2 mr-1">Packages</span><span style={{
                                padding: "3px", backgroundColor: "#e2e2e2",
                                fontSize: "11px", fontWeight: "700", borderRadius: "20px"
                            }}>36</span></div>
                        <div style={{ borderTop: "4px solid tomato" }} className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                            href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                            <i style={{ fontWeight: "500" }} className="fa fa-user-o" aria-hidden="true"></i>
                            <span style={{ fontWeight: "600" }} className="ml-2">People</span></div>
                        <div className="nav-item nav-link" id="nav-home-tab" data-toggle="tab"
                            href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                            <i className="fa fa-file-text-o text-muted" aria-hidden="true"></i>
                            <span className="text-secondary ml-2">Projects</span></div>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane d-flex fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="card" style={{ width: "280px", fontSize: "13px", marginTop: "5%", marginLeft: "6%" }}>
                            <div className="text-muted p-2 font-weight-bold card-header">
                                Organization permissions
                            </div>
                            <div style={{ borderLeft: "3px solid tomato" }} className="py-2"><span className="ml-2 font-weight-bold">Members</span>
                                <span style={{
                                    padding: "3px", backgroundColor: "#e2e2e2", fontSize: "11px",
                                    fontWeight: "700", borderRadius: "20px", float: "right", marginRight: "2%"
                                }}>132</span></div>
                        </div>
                        <div>
                            <input onChange={(e) => this.setState({ userName: e.target.value })}
                                style={{ position: "relative", top: "49%", left: "20%", width: "250px" }}
                                className="form-control p-1" type="search" placeholder="Find a member..." />
                            <button style={{ position: "relative", marginTop: "14%", left: "120%" }}
                                onClick={() => this.props.searchUsers(this.state.userName)} className="btn btn-secondary">Search</button>
                        </div>
                        <ul style={{ position: "absolute", left: "27%", top: "33%" }} className="col-8 list-unstyled">
                        
                                {this.props.usersList.map((ele, index) => {
                                    return  <SearchedUsers ele={ele} key={index}/>
                                })}
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        usersList: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchUsers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);