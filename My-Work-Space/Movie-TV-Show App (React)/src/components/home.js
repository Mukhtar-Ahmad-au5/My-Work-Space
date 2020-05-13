import React, { Component } from "react";
import Movies from "./movies"
import TvShows from "./tvshows"
import PosterPage from "./posterPage"
import ShowPage from "./showpage"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Route, Link, Switch } from "react-router-dom";
import { movies, tvShowsF } from "../actions/action";

class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-fixed">
                    <div className="d-flex flex-col navBar">
                        <div className="offset-md-1 mt-1"><Link style={{ textDecoration: 'none', color: 'white' }} to="/"><strong className="text-white mr-4">Movies</strong></Link></div>
                        <div className="mt-1"><Link style={{ textDecoration: 'none', color: 'white' }} to="/tvShows"><strong className="text-white">TV Shows</strong></Link></div>
                        <div className="p-1 bg-warning rounded offset-md-1"><strong className='text-dark logoText'>TMDb</strong></div>
                        <input className="ml-3 p-2 searchInp" type="search" placeholder="Search"></input>
                        <button className="px-4 searchBtn"><i className="fa fa-search"></i></button>
                    </div>
                </nav>

                <Switch>
                    <Route path="/" exact>
                        <h5 className="text-warning ml-4 mt-4">Most Popular Movies:</h5>
                        <Movies />
                    </Route>
                    <Route path="/tvShows" exact>
                        <h5 className="text-warning ml-4 mt-4">Most Popular TV Shows:</h5>
                        <TvShows />
                    </Route>
                    <Route path="/movieposter" exact>
                        <PosterPage />
                    </Route>
                    <Route path="/showposter" exact>
                        <ShowPage />
                    </Route>
                </Switch>

            </div>
        )
    }
    componentDidMount() {
        this.props.movies()
        this.props.tvShowsF()
    }
}

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        movies, tvShowsF
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)