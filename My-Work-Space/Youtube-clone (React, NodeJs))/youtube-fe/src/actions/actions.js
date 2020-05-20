import axios from "axios"
const Api_Key = 'AIzaSyCEVBbu87dBtHxQQqN4GWadE2y5KtPmpSM'

export function fetchVideos(searchVids) {
    let request = axios({
        method: "get",
        url: `https://www.googleapis.com/youtube/v3/search?q=${searchVids}&type=video&maxResults=25&part=snippet&key=${Api_Key}`,
        data: searchVids
    })
    return (dispatch) => {
        request.then(response => {
            console.log(response)
            dispatch({
                type: "Videos",
                payload: response.data.items
            })
        }).catch(err => console.log(err));
    }
}

export function relatedVideos(relVids) {
    let request = axios({
        method: "get",
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${relVids}&maxResults=10&type=video&key=${Api_Key}`,
        data: relVids
    })

    return (dispatch) => {
        request.then(response => {
            let videoIds = response.data.items.map(elem => elem.id.videoId)
            let ids = relVids +"%2C" + videoIds.join(",", "%2C")
            videoData(ids)
                .then(res => {
                    dispatch({
                        type: "relatedVideos",
                        payload: {
                            relatedVideos: response.data.items,
                            relatedVideosData: res.data.items
                        }
                    })
                })
        }).catch()
    }
}

export function trendingVideos(treVids) {
    let request = axios({
        method: "get",
        url: `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=IN&key=${Api_Key}`,
        data: treVids
    })
    return (dispatch) => {
        request.then(response => {
            console.log(response)
            dispatch({
                type: "trendingVids",
                payload: response.data.items
            })
        }).catch()
    }
}

function videoData(id) {
    return axios({
        method: "get",
        url: `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${Api_Key}`,
        data: id
    })
    // return (dispatch) => {
    //     request.then(response => {
    //         console.log("videoDATAreq ", response)
    //         dispatch({
    //             type: "videoDataReq",
    //             payload: response.data.items
    //         })
    //     }).catch()
    // }
}

export function setVidID(id) {
    return {
        type: "SetVidID",
        payload: id
    }
}

export function clearVids() {
    return {
        type: "ClearVids"
    }
}


export function login(data) {
    let userdata = axios({
        // headers: {
        //     "x-auth-token": localStorage.getItem("token")
        // },
        method: "post",
        url: "http://localhost:3100/users",
        data: data
    })
    return (dispatch) => {
        userdata.then(res => {
            console.log(res, "res of login")
            dispatch({
                type: "Login",
                payload: res.data
            })
        })
    }
}

export function signup(data) {
    let userdata = axios({
        method: "post",
        url: "http://localhost:3100/users/signup",
        data: data
    })
    return (dispatch) => {
        userdata.then(res => {
            dispatch({
                type: "SignUp",
                payload: res.data.data
            })
        })
    }
}

export function logout() {
    return ({
        type: "Logout"
    })
}