import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { videosReducer } from "./videosReducer"

const rootReducers = combineReducers({
    auth: authReducer,
    video: videosReducer
})

export default rootReducers;