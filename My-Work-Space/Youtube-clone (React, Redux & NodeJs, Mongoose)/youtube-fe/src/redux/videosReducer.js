let videosState = {
    nowPlayingID: "",
    videoData: [],
    searchHistory: [],
    trending: [],
    videos: [],
    played: [],
    bookmarked: [],
    search: [],
    relatedVideosData:[]
}

export function videosReducer(state = videosState, action) {
    console.log("videoReducer", videosState)
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "SetVidID":
            stateCopy.nowPlayingID = action.payload
            return stateCopy
        case "Videos":
            stateCopy.search = action.payload
            return stateCopy
        case "relatedVideos":
            console.log("payload", action.payload)
            stateCopy.videos = action.payload.relatedVideos
            stateCopy.videoData = [action.payload.relatedVideosData[0]]
            stateCopy.relatedVideosData= action.payload.relatedVideosData.slice(1)

            return stateCopy
        case "trendingVids":
            stateCopy.trending = action.payload
            return stateCopy
        case "ClearVids":
            stateCopy.search = []
            stateCopy.videos = []
            return stateCopy;
        default:
            return stateCopy
    }
}