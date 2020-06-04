let initialState = {
    users: [],
    repos: []
}

function appReducer(state = initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "usersList":
            stateCopy.users = action.payload;
            return stateCopy
        case "usersRepoList":
            stateCopy.repos = action.payload;
            return stateCopy
        default:
            return stateCopy
    }
}

export default appReducer;