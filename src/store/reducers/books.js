import {SUCCESS_GET_BOOK} from "../actions/books"
import { map } from "../../lib/fx"

const initialState = {
  bookList : [],
  is_end : false // 검색 더 할 수 있는지 check
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_BOOK : {
      console.log('result', action.payload)
      const { documents, meta } = action.payload
      const list = map( doc =>({
        publisher : doc.publisher,
        authors : doc.authors,
        title : doc.title,
        thumbnail : doc.thumbnail }
        ), documents)
      return { bookList : [...state.bookList, ...list]  , is_end : meta.is_end}
    }
    default :
      return state
  }
}