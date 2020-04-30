import React, { Component } from 'react';
import { connect } from "react-redux";
import { clearVids , setVidID } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class SearchList extends Component {

    render() {
        return (
            <div>
                <div className="ml-2 mt-3 col-sm-2 filter"><i class="fa fa-sliders" aria-hidden="true"></i><span className="filterText ml-2">FILTER</span></div>
                <hr className="bg-secondary w-75 ml-4 mt-1" />
                <ul className="list-unstyled">
                    {this.props.search.map((elem, index) => {
                        return <li className="col-md-8">
                           <Link style={{ textDecoration: 'none', color: 'white' }} to="/home/video"><div onClick={()=>this.props.setVidID(elem.id.videoId)} className="row ml-1">
                                <div className="col-md-4 p-2">
                                    <img className="imgThumb" width="250" height="170" src={elem.snippet.thumbnails.high.url} alt="" />
                                </div>
                                <div className="col-md-8 mt-2 ">
                                    <div className="vidTitle text-white">
                                        {elem.snippet.title}
                                        <div className="font-weight-bold text-secondary">
                                            <small className="channelName">{elem.snippet.channelTitle}</small> 
                                        </div>
                                    </div>
                                    <div className="vidDes text-secondary">
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
        console.log("load hone ke baad", this.props)
    }
}

const mapStateToProps = (state) => {
    console.log("searchpage state", state)
    return {
        search: state.video.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clearVids , setVidID
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)