import React, { Component } from 'react';
import { connect } from "react-redux";
import { relatedVideos, setVidID } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom"
import ReactTimeAgo from "react-time-ago";
import NumericLabel from "react-pretty-numbers"
class Recommended extends Component {


    render() {

        let params = {
            justification: 'L',
            locales: 'en-AU',
            currency: false,
            currencyIndicator: false,
            percentage: false,
            precision: 1,
            commafy: false,
            shortFormat: true,
            title: true,
            cssClass: ['class1', 'class2']
        };
        let relatedVideosData = this.props.relatedVideosData

        return (
            <div>
                <div className="mt-2">
                    <img height="300px" width="100%" src={require("./apple.jpg")} alt="" />
                </div>
                <div className="m-4"><h5 className="font-weight-bold text-white">Recommended</h5></div>
                <div className="col-md-12">
                    <div className="row">
                        {this.props.videos.map((elem, index) => {
                            return <div className="col-md-3 mb-5">
                                <div className="p-2 thumbDiv">
                                    <Link to="/home/video"><div onClick={() => this.props.setVidID(elem.id.videoId)} className="thumbPlay"><i class="fa fa-play fa-2x" aria-hidden="true"></i></div></Link>
                                    <img className="imgThumb" width="100%" src={elem.snippet.thumbnails.high.url} alt="" />
                                </div>
                                <div className="col-md-12 ml-0">
                                    <div className="thumbTitle font-weight-bold text-white">{elem.snippet.title}</div>
                                    <div className="font-weight-bold">
                                        <small className="channelName">{elem.snippet.channelTitle}</small>
                                    </div>
                                    <div>
                                       <small className="channelName"><NumericLabel params={params}>{relatedVideosData[index].statistics.viewCount}</NumericLabel> views <span className="ml-1"><ReactTimeAgo date={elem.snippet.publishedAt} /></span></small>
                                    </div>
                                </div>

                            </div>
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.relatedVideos()
    }
}

const mapStateToProps = (state) => {
    console.log("landingpage state", state)
    return {
        videos: state.video.videos,
        nowplaying: state.video.nowPlayingID,
        relatedVideosData: state.video.relatedVideosData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ relatedVideos, setVidID }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Recommended)