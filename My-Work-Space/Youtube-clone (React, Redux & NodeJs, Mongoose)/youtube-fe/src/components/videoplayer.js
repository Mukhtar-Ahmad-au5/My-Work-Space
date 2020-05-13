import React, { Component } from 'react';
import { connect } from "react-redux";
import { relatedVideos, clearVids, setVidID } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import ReactTimeAgo from "react-time-ago";
import NumericLabel from "react-pretty-numbers"


class VideoPlayer extends Component {


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
                <div className="row">
                    <div className="col-md-8 p-0 mt-4 ml-2">
                        <iframe className="col-md-12" width="950" height="525" title="Title" src={`https://www.youtube.com/embed/${this.props.nowplaying}/?autoplay=1`} allow='autoplay;'>
                        </iframe>
                        {this.props.videoDATA.map((elem, index) => {
                            return <div>
                                <div className="text-white vidName mt-3 ml-3">{elem.snippet.title}</div>
                                <div className="row vidData">
                                    <div className="mt-2 ml-3"><NumericLabel params={{commafy:true, justification: 'L'}}>{elem.statistics.viewCount}</NumericLabel> views &#8226; <ReactTimeAgo date={elem.snippet.publishedAt} /></div>
                                    <div className="mt-2 offset-4"><i className="fa fa-thumbs-up ml-4 mr-2" aria-hidden="true"></i><NumericLabel className="ml-2" params={params}>{elem.statistics.likeCount}</NumericLabel></div>
                                    <div className="mt-2"><i className="fa fa-thumbs-down ml-4 mr-2" aria-hidden="true"></i><NumericLabel className="ml-2" params={params}>{elem.statistics.dislikeCount}</NumericLabel></div>
                                    <div className="mt-2"><i className="fa fa-share ml-4 mr-2" aria-hidden="true"></i>SHARE</div>
                                    <div className="mt-2"><i className="fa fa-indent ml-4 mr-2" aria-hidden="true"></i>SAVE</div>
                                </div>
                               <hr className="hrVP bg-secondary mb-3 mt-3"/>
                               <button className="sub">SUBSCRIBE</button>
                            </div>
                        })}   
                        
                    </div>
                    <div className="col mt-4">
                        <div className="chat-replay col mb-3">
                            SHOW CHAT REPLAY
                        </div>
                        <div className="row autoplayDiv mt-4">
                            <span className="text-white">Up next</span>
                            <div className="d-flex flex-col autoplay">
                                <span className="autoplayText mr-2">AUTOPLAY</span>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked={true} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div id="Div">
                            {this.props.videos.map((elem, index) => {
                                return <div className="row col-md-12 p-0">
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home/video">
                                        <div onClick={() => this.props.setVidID(elem.id.videoId)} className="d-flex flex-col mt-2 mb-2">
                                            <img className="col-md-5 p-0" id="vidpImg" width="100%" src={elem.snippet.thumbnails.high.url} alt="" />
                                            <div>
                                                <div className="thumbTitle ml-2 row text-white">
                                                    {elem.snippet.title}
                                                </div>
                                                <div className="row ml-2 mt-1 channelName">
                                                    <small className="font-weight-bold">{elem.snippet.channelTitle}</small>
                                                </div>
                                                <div className="row">
                                                   <small className="channelName ml-2"><NumericLabel params={params}>{relatedVideosData[index].statistics.viewCount}</NumericLabel> views</small> 
                                                </div>
                                            </div>
                                        </div></Link>
                                </div>
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.clearVids()
        this.props.relatedVideos(this.props.nowplaying)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.nowplaying !== this.props.nowplaying) {
            this.props.clearVids()
            this.props.relatedVideos(this.props.nowplaying)

        }
    }
}

const mapStateToProps = (state) => {
    console.log("videoplayer state", state)
    return {
        videos: state.video.videos,
        videoDATA: state.video.videoData,
        nowplaying: state.video.nowPlayingID,
        relatedVideosData: state.video.relatedVideosData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ relatedVideos, clearVids, setVidID }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)