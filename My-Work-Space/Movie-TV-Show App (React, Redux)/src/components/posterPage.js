import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css"

class PosterPage extends Component {

    render() {
        let movieData = this.props.movieData
        return (
            <div>
                <br/>
                <br/>
                <div className="col-md-8 offset-md-2 shadow">
                    <div className="mainInfo">
                        <div className="col-md-4">
                            <img src={`http://image.tmdb.org/t/p/w342${movieData.poster_path}`} alt=""/>
                        </div>
                        <div className="col-md-4">
                                <div><h3 className="text-white">{movieData.title}</h3></div>
                                <div>
                                <h3><i className="fa fa-star text-warning mr-1" aria-hidden="true"></i><strong className="text-white">{movieData.vote_average}</strong></h3></div>
                                <div><strong className="text-info">Release Date: {movieData.release_date}</strong></div>
                                <br/>
                                <div><p className="text-secondary font-weight-light">{movieData.overview}</p></div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieData: state.movieData,
        showData: state.showData
    }
}

export default connect(mapStateToProps)(PosterPage)