let initialState = {
    movies: [],
    tvShows: [],
    movieData: [],
    showData: []
}

function appReducer(state = initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "movieList":
            stateCopy.movies = action.payload;
            return stateCopy
        case "tvList":
            stateCopy.tvShows = action.payload;
            return stateCopy
        case "setMovieIndex":
            stateCopy.movieData = stateCopy.movies[action.payload];
            return stateCopy
        case "setShowIndex":
            stateCopy.showData = stateCopy.tvShows[action.payload];
            return stateCopy
        case "moreMovies":
            stateCopy.movies = [...stateCopy.movies,...action.payload]
            return stateCopy
            case "moreShows":
            stateCopy.tvShows = [...stateCopy.tvShows,...action.payload]
            return stateCopy
        default:
            return stateCopy
    }
}

export default appReducer;