import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import GetUserRepo from "./getuserrepo";
import { searchUsersRepo } from "../actions/action";

class ProfilePage extends Component {

    componentDidMount() {
        this.props.searchUsersRepo(this.props.location.state.userinfo.login)
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <div style={{ marginLeft: "5%" }} className="col-3">
                        <div style={{ marginTop: "10%" }}><img className="rounded" width="280" height="280"
                            src={this.props.location.state.userinfo.avatar_url} alt="pp" /></div>
                        <h3 style={{ marginTop: "3%", marginBottom: "0%", fontWeight: "600" }}>Github Name</h3>
                        <p style={{ fontWeight: "200", fontSize: "20px" }} className="text-muted">{this.props.location.state.userinfo.login}</p>
                        <button style={{ width: "280px", border: "1px solid #e2e2e2", fontWeight: "600", fontSize: "13px" }}
                            className="p-2 rounded">Follow</button>
                        <div className="mt-3"><i className="fa fa-building-o" aria-hidden="true"></i> Github</div>
                        <div className="m-1"><i className="fa fa-map-marker" aria-hidden="true"></i> Location</div>
                        <div className="m-1"><i className="fa fa-envelope-o" aria-hidden="true"></i> Email</div>
                        <div className="m-1"><i className="fa fa-link" aria-hidden="true"></i> {this.props.location.state.userinfo.url}</div>
                        <div className="m-1"><i className="fa fa-star-o mr-3" aria-hidden="true"></i>
                            <span className="rounded" style={{
                                padding: "3px", fontSize: "12px", color: "white",
                                fontWeight: "600", backgroundColor: "darkviolet"
                            }}>PRO</span></div>
                    </div>
                    <div style={{ marginTop: "1%" }} className="col">
                        <div className="d-flex border-bottom">
                            <div className="p-3 text-muted">Overview</div>
                            <div style={{ borderBottom: "3px solid tomato", fontWeight: "700" }} className="p-3">Repositories</div>
                            <div className="p-3 text-muted">Projects</div>
                            <div className="p-3 text-muted">Stars</div>
                            <div className="p-3 text-muted">Followers</div>
                            <div className="p-3 text-muted">Following</div>
                        </div>
                        <div className="d-flex">
                            <input style={{ height: "35px" }} type="search" placeholder="Search or jump to.."
                                className="form-control mt-3 col-8" />
                            <button className="rounded py-1" style={{border:"1px solid #e2e2e2", marginTop:"16px", marginLeft:"1%", height:"30%"}}>
                                Type: All<i className="fa ml-1 fa-caret-down"
                                aria-hidden="true"></i></button>
                            <button className="rounded py-1" style={{border:"1px solid #e2e2e2", marginTop:"16px", marginLeft:"1%", height:"30%"}}>
                                Language: All<i className="fa ml-1 fa-caret-down"
                                aria-hidden="true"></i></button>
                        </div>
                        <ul style={{ position: "absolute", top: "17%" }} className="col-10">
                                {this.props.usersRepoList.map((ele, index) => {
                                    return <GetUserRepo userinfo={this.props.location.state.userinfo} ele={ele} key={index}/>
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
        usersRepoList: state.repos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchUsersRepo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);