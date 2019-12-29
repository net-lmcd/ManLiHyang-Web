import { SUCCESS_GET_POST_LIST } from "../actions/posts"

const initialState = {
  list : ''
}

export default ( state = initialState, action ) => {
  switch (action.type) {
    case SUCCESS_GET_POST_LIST :{
      return {...state, list : action.payload }
    }
    default :
      return state
  }
}