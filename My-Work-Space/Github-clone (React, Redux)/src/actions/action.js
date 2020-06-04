import axios from "axios"

export function searchUsers(data) {
    let request = axios({
        method: "get",
        url: `https://api.github.com/search/users?q=${data}+repos:%3E42+followers:%3E1000`,
        data: data
    })
    return (dispatch) => {
        request.then(response => {
            console.log(response)
            dispatch({
                type: "usersList",
                payload: response.data.items
            })
        }).catch()
    }
}

export function searchUsersRepo(data) {
    let request = axios({
        method: "get",
        url: `https://api.github.com/users/${data}/repos`,
        data: data,
        headers: {
            Accept: 'application/vnd.github.nebula-preview+json'
        } 
    })
    return (dispatch) => {
        request.then(response => {
            console.log(response)
            dispatch({
                type: "usersRepoList",
                payload: response.data
            })
        }).catch()
    }
}

