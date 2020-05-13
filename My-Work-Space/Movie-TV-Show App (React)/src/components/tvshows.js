import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { setShowIndex, requestShow } from "../actions/action"
import "../App.css"

class TvShows extends Component {

    state = {
        count: 1
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
        },()=>{this.props.requestShow(this.state.count)})
    }
    render() {
        return (
            <div>
                <div className="row mainDiv col">
                    {this.props.tvshows.map((elem, index) => {
                        return <Link style={{ textDecoration: 'none', color: 'white' }} to="/showposter"> <div key={index} className="card" onClick={() => this.props.setShowIndex(index)}>
                            <img className="card-img-top p-2" src={`http://image.tmdb.org/t/p/w780${elem.poster_path}`} alt=""/>
                            <div className="card-body"><small className="title">{elem.name}</small></div>
                        </div>
                        </Link>
                    })}
                    <div>
                    <button onClick={()=>this.handleClick(this)} className="btn btn-warning">Load More</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tvshows: state.tvShows,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setShowIndex, requestShow
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TvShows)