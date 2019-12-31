import { combineReducers } from "redux/es/redux"
import posts from './posts'
import books from './books'

const rootReducers  = combineReducers({
  posts,
  books
})

export default rootReducers