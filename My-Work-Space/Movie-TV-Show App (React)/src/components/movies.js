import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { setMovieIndex, request } from "../actions/action"
import "../App.css"

class Movies extends Component {

    state = {
        count: 1
    }
    handleClick(){
        this.setState({
            count: this.state.count + 1
        },()=>{this.props.request(this.state.count)})
    }
    render() {
        return (
            <div>
                <div className="row col m-4">
                    {this.props.movies.map((elem, index) => {
                        return <Link style={{ textDecoration: 'none', color: 'white' }} to="/movieposter"> <div key={index} className="card" onClick={() => this.props.setMovieIndex(index)}>
                            <img className="card-img-top p-2" src={`http://image.tmdb.org/t/p/w780${elem.poster_path}`} alt="" />
                            <div className="card-body"><small className="title">{elem.title}</small></div>
                        </div>
                        </Link>
                    })}
                    <div className="butn">
                    <button onClick={()=>this.handleClick(this)} className="btn btn-warning">Load More</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setMovieIndex, request
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)