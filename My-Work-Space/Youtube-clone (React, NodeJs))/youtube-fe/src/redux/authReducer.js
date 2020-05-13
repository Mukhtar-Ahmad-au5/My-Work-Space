let authState = {
    isLoggedin: false,
    name: "",
    email: "",
    password: "",
    isRegistered: false
}

export function authReducer(state = authState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "Login":
            localStorage.setItem("token", action.payload.token)
            stateCopy.isLoggedin = true
            stateCopy.name = action.type.name
            stateCopy.email = action.type.email
            stateCopy.password = action.type.password
            return stateCopy
        case "SignUp":
            stateCopy.isRegistered = true
            return stateCopy
        default:
            return stateCopy
    }
}

