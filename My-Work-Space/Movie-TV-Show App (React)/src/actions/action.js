import axios from "axios"
let Api_Key = "cf672d5af5b5025e48ee79a16a4e6a9f"

export function movies(data) {
    let request = axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}&language=en-US&page=1`,
        data: data
    })
    return (dispatch) => {
        request.then(response => {
            dispatch({
                type: "movieList",
                payload: response.data.results
            })
        }).catch()
    }
}

export function tvShowsF(data) {
    let request = axios({
        method: "get",
        url: `https://api.themoviedb.org/3/tv/popular?api_key=${Api_Key}&language=en-US&page=1`,
        data: data
    })
    return (dispatch) => {
        request.then(response => {
            dispatch({
                type: "tvList",
                payload: response.data.results
            })
        }).catch()
    }
}

export function request(num){
    let req = axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/popular?api_key=cf672d5af5b5025e48ee79a16a4e6a9f&language=en-US&page=${num}`
        })
        return (dispatch) => {
            req.then(response => {
                dispatch({
                    type: "moreMovies",
                    payload: response.data.results
                })
            }).catch()
        }
  }

  export function requestShow(num){
    let req = axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/popular?api_key=cf672d5af5b5025e48ee79a16a4e6a9f&language=en-US&page=${num}`
        })
        return (dispatch) => {
            req.then(response => {
                dispatch({
                    type: "moreShows",
                    payload: response.data.results
                })
            }).catch()
        }
  }

export function setMovieIndex(id) {
    return {
        type: "setMovieIndex",
        payload: id
    }
}

export function setShowIndex(id) {
    return {
        type: "setShowIndex",
        payload: id
    }
}

