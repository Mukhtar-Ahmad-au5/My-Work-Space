
export const addEvent = (data) => {
    return {
        type: "addEvent",
        payload: data
    }
}

export const deleteEvent = (data) => {
    return {
        type: "deleteEvent",
        payload: data
    }
}