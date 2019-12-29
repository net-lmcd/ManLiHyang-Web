export const GET_POST_LIST = 'GET_POST_LIST'
export const SUCCESS_GET_POST_LIST = 'SUCCESS_GET_POST_LIST'
export const FAILURE_GET_POST_LIST = 'FAILURE_GET_POST_LIST'

export const getPostList = () => {
  return {
    type : GET_POST_LIST,
    payload : {
      method : 'get',
      url : `http://${process.env.REACT_APP_URL}/board/1001`
    }
  }
}