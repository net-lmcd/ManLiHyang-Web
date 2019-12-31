export const GET_BOOKS = 'GET_BOOKS'
export const SUCCESS_GET_BOOKS = 'SUCCESS_GET_BOOKS'
export const FAILURE_GET_BOOKS = 'FAILURE_GET_BOOKS'

export const getBooks = query => {
  return {
    type : GET_BOOKS,
    payload : {
      method : 'get',
      url : 'https://dapi.kakao.com/v3/search/book',
      params : { query },
      headers : {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`
      }
    }
  }
}