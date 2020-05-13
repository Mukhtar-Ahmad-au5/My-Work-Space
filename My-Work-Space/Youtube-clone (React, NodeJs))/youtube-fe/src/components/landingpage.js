import React, { Component } from 'react';
import Recommended from "./recommended"
import SearchList from "./searchlist"
import Trending from "./trending"
import { connect } from "react-redux";
import { trendingVideos } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { Route, Switch, Link } from "react-router-dom";

class LandingPage extends Component {

    render() {
        return (
            <div>
                <div className="row landingpageROW">
                    <div className="col-md-2 listNavbar">
                        <ul className="list-unstyled text-white mt-2">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><li className="py-2"><i className="fa fa-home text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Home</small></li></Link> 
                            <Link style={{ textDecoration: 'none', color: 'white' }} onClick={this.props.trendingVideos} to="/home/trending"><li className="py-2"><i className="fa fa-free-code-camp text-secondary ml-3" aria-hidden="true"></i><small className="ml-3">Trending</small></li></Link>
                            <li className="py-2"><i className="fa fa-play-circle text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Subscriptions</small></li>
                            <hr className="bg-secondary w-100" />
                            <li className="py-2"><i className="fa fa-file-video-o text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Library</small></li>
                            <li className="py-2"><i className="fa fa-history text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">History</small></li>
                            <li className="py-2"><i className="fa fa-toggle-right text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Your videos</small></li>
                            <li className="py-2"><i className="fa fa-clock-o text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Watch later</small></li>
                            <li className="py-2"><i className="fa fa-thumbs-up text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Liked videos</small></li>
                            <hr className="bg-secondary w-100" />
                            <li className="py-2"><i className="fa fa-youtube-play text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">YouTube Premium</small></li>
                            <li className="py-2"><i className="fa fa-film text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">YouTube Movies</small></li>
                            <li className="py-2"><i className="fa fa-gamepad text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Gaming</small></li>
                            <li className="py-2"><i className="fa fa-podcast text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Live</small></li>
                            <li className="py-2"><i className="fa fa-shopping-bag text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Fashion</small></li>
                            <hr className="bg-secondary w-100" />
                            <li className="py-2"><i className="fa fa-cog text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Settings</small></li>
                            <li className="py-2"><i className="fa fa-flag text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Report history</small></li>
                            <li className="py-2"><i className="fa fa-question-circle text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Help</small></li>
                            <li className="py-2"><i className="fa fa-comments text-secondary ml-3" aria-hidden="true"></i><small className="ml-4">Send feedback</small></li>
                        </ul>
                        <ul className="text-secondary list-unstyled">
                            <li><small className="font-weight-bold">About &nbsp; Press &nbsp; Copyright</small></li>
                            <li><small className="font-weight-bold">Contact us &nbsp; Creators</small></li>
                            <li><small className="font-weight-bold">Advertise &nbsp; Developers</small></li><br />
                            <li><small className="font-weight-bold">Terms &nbsp; Privacy &nbsp; Policy & Safety</small></li>
                            <li><small className="font-weight-bold">Test new features</small></li><br />
                            <li><small className="font-weight-light">&copy; 2020 Youtube. All Rights Reserved.</small></li>
                        </ul>
                    </div>
                    <div className="col-md-10 px-0 mainComp">
                        <Switch>
                            <Route path="/home" exact>
                                <Recommended />
                            </Route>
                            <Route path="/home/trending" exact>
                                <Trending />
                            </Route>
                            <Route path="/home/search" exact>
                                <SearchList />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ trendingVideos }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)