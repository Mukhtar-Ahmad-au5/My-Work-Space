import { combineReducers } from "redux";

let initialState = {
  ProductList: []
}

function appReducer(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case "addProduct":
      return addToList(stateCopy, action.payload)
        default:
      return stateCopy
  }
}

const rootReducers = combineReducers({
  appReducer
})

export default rootReducers;

let addToList = (state, data)=> {
  let newProductList = state.ProductList.slice()
  newProductList.push(data)
  state.ProductList = newProductList;
  return state;
}
