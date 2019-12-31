import {SET_BOOK_NAME, SUCCESS_GET_BOOK} from "../actions/books"
import { map } from "../../lib/fx"

const initialState = {
  bookList : [],
  is_end : false, // 검색 더 할 수 있는지 check,
  page : 1,
  bookName : ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_BOOK : {
      const { documents, meta } = action.payload
      const list = map( doc =>({
        publisher : doc.publisher,
        authors : doc.authors,
        title : doc.title,
        thumbnail : doc.thumbnail }
        ), documents)
      if(state.page === 1){ // 첫 검색
        return {
          bookName : state.bookName,
          bookList : list,
          is_end : meta.is_end,
          page : state.page + 1
        }
      }
      else{ // by 스크롤링
        return {
          bookName : state.bookName,
          bookList : [...state.bookList, ...list],
          is_end : meta.is_end,
          page : state.page + 1
        }
      }
    }
    case SET_BOOK_NAME : {
      return {...initialState, bookName : action.payload}
    }
    default :
      return state
  }
}