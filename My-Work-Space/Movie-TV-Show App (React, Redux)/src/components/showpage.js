import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css"

class ShowPage extends Component {

    render() {
        let showData = this.props.showData
        return (
            <div>
                <br/>
                <br/>
                <div className="col-md-8 offset-md-2 shadow">
                    <div className="mainInfo">
                        <div className="col-md-4">
                            <img src={`http://image.tmdb.org/t/p/w342${showData.poster_path}`} alt=""/>
                        </div>
                        <div className="col-md-4">
                                <div><h3 className="text-white">{showData.name}</h3></div>
                                <div>
                                <h3><i className="fa fa-star text-warning mr-1" aria-hidden="true"></i><strong className="text-white">{showData.vote_average}</strong></h3></div>
                                <div><strong className="text-info">First Air Date: {showData.first_air_date}</strong></div>
                                <br/>
                                <div><p className="text-secondary font-weight-light">{showData.overview}</p></div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showData: state.showData
    }
}

export default connect(mapStateToProps)(ShowPage)