import React, { Component } from 'react';
import { connect } from "react-redux";
import { clearVids, setVidID } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

class Trending extends Component {

    render() {
        return (
            <div className="ml-5 mt-2">
                <div className="col-md-10 d-flex flex-col mb-3">
                    <div className="trendTab">
                    <div><i class="fa fa-music text-white ml-3 mt-3 fa-3x" aria-hidden="true"></i></div>
                    <div className="trendTabText mt-4 ml-4">Music</div>
                    </div>
                    <div className="trendTab">
                    <div><i class="fa fa-gamepad text-white ml-3 mt-3 fa-3x" aria-hidden="true"></i></div>
                    <div className="trendTabText mt-4 ml-3">Gaming</div>
                    </div>
                    <div className="trendTab">
                    <div><i class="fa fa-newspaper-o text-white ml-3 mt-4 fa-3x" aria-hidden="true"></i></div>
                    <div className="trendTabText mt-3 ml-4">News</div>
                    </div>
                    <div className="trendTab">
                    <div><i class="fa fa-film text-white ml-3 mt-3 fa-3x" aria-hidden="true"></i></div>
                    <div className="trendTabText mt-4 ml-3">Movies</div>
                    </div>
                    <div className="trendTab">
                    <div><i class="fa fa-shopping-bag text-white ml-4 mt-3 fa-3x" aria-hidden="true"></i></div>
                    <div className="trendTabText mt-4 ml-4">Fasion</div>
                    </div>
                </div>
                <hr className="bg-secondary w-75 ml-4 mt-1" />
                <ul className="list-unstyled">
                    {this.props.treVideos.map((elem, index) => {
                        return <li className="col-md-8">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home/video"><div onClick={()=>this.props.setVidID(elem.id)} className="row ml-1">
                                <div className="col-md-4 p-2">
                                    <img className="imgThumb" width="250" height="170" src={elem.snippet.thumbnails.high.url} alt="" />
                                </div>
                                <div className="col-md-8 mt-2">
                                    <div className="vidTitle ml-3 text-white">
                                        {elem.snippet.title}
                                        <div className="font-weight-bold">
                                            <small className="channelName">{elem.snippet.channelTitle}</small> 
                                        </div>
                                    </div>
                                    <div className="treVidDes ml-3 text-secondary">
                                        {elem.snippet.description}
                                    </div>
                                </div>
                            </div></Link>
                        </li>
                    }
                    )}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.clearVids()
    }
}

const mapStateToProps = (state) => {
    console.log("trending state", state)
    return {
        treVideos: state.video.trending,
        nowplaying: state.video.nowPlayingID
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clearVids, setVidID
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending)