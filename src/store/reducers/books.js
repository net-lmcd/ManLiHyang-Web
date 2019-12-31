import {SUCCESS_GET_BOOK} from "../actions/books"

const initialState = {
  list : ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_BOOK : {
      console.log('result', action.payload)
      return { list : action.payload}
    }
    default :
      return state
  }
}