import {SUCCESS_GET_BOOKS} from "../actions/books"

const initialState = {
  result : ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_BOOKS : {
      console.log('result', action.payload)
      return { result : action.payload}
    }
    default :
      return state
  }
}