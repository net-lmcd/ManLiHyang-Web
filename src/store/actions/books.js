export const GET_BOOK = 'GET_BOOKS'
export const SUCCESS_GET_BOOK = 'SUCCESS_GET_BOOKS'
export const FAILURE_GET_BOOK = 'FAILURE_GET_BOOKS'
export const SET_BOOK_NAME = 'SET_BOOK_NAME'
export const SET_BOOK_INFO = 'SET_BOOK_INFO'

export const setBookName = name => ({type : SET_BOOK_NAME, payload : name})
export const setBookInfo = (thumbnail, title) => ({type : SET_BOOK_INFO, payload : {thumbnail, title}})

export const getBook = params => {
  return {
    type : GET_BOOK,
    payload : {
      method : 'get',
      url : 'https://dapi.kakao.com/v3/search/book',
      params,
      headers : {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`,
      }
    }
  }
}