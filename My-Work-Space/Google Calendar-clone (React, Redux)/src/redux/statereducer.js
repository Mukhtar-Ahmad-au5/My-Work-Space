
let initialState = {
    events: []
}

function appReducer(state = initialState, action) {
    let stateCopy = { events: [...state.events] }
    switch (action.type) {
        case "addEvent":
            return addToEvents(stateCopy, action.payload)
        case "deleteEvent":
            return deleteEvent(stateCopy, action.payload)
        default:
            return stateCopy;
    }
}


export default appReducer;

let addToEvents = (state, data) => {
    state.events = state.events.filter(el => {
        return el.start.toString() !== data.start.toString()
    })
    state.events.push(data);
    return state;
}
let deleteEvent = (state, data) => {
    state.events = state.events.filter(el => {
        return (el.delete !== data.delete && el.start.toString() !== data.start.toString())
    })
    return state;
}