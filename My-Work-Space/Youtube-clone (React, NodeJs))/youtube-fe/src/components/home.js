import React, { Component } from "react";
import Videoplayer from "./videoplayer"
import { connect } from "react-redux";
import { fetchVideos } from '../actions/actions';
import { bindActionCreators } from 'redux';
import LandingPage from "./landingpage";
import { Route, Link, Switch } from "react-router-dom";


class Home extends Component {

    state = {
        title: ""
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.fetchVideos(this.state.title)
    }

    render() {
        return (
            <div>
                <nav className="navbar-fixed">
                    <div className="d-flex flex-col navBar">
                        <i className="fa fa-bars mt-2 ml-4 text-white"></i>
                        <Link to="/home"><i className="logo fa fa-youtube-play ml-4 fa-2x"></i></Link>
                        <strong className='m-1 text-white logoText'>YouTube</strong>
                        <span className="text-secondary mt-1" style={{ "fontSize": "8px" }}>IN</span>
                        <input className="offset-md-2 p-2 searchInp" onChange={(elem) => this.setState({ title: elem.target.value })} type="search" placeholder="Search"></input>
                        <button className="px-4 searchBtn" onClick={this.handleOnSubmit}> <Link to="/home/search"><i className="fa fa-search"></i></Link> </button>
                        <i className="fa fa-video-camera mt-2 offset-md-2 text-white"></i><i className="fa fa-th mt-2 ml-5 text-white"></i><i className="fa fa-bell mt-2 ml-5 text-white"></i>
                    </div>
                </nav>
                <Switch>
                    <Route path="/home/video" exact>
                        <Videoplayer />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log("home state", state)
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchVideos }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)