import { all, put, call, takeEvery } from "redux-saga/effects"
import axios from 'axios'
import { GET_POST_LIST, SUCCESS_GET_POST_LIST, FAILURE_GET_POST_LIST} from "../actions/posts"

export function* getPostList(action){
  try{
    const { data } = yield call(axios, action.payload)
    yield put({type : SUCCESS_GET_POST_LIST, payload : data})
  }catch(err){
    yield put({type : FAILURE_GET_POST_LIST, err})
  }
}

function* watchGetPostList(){
  yield takeEvery(GET_POST_LIST, getPostList)
}

export default function* rootSagas(){
  yield all([
    watchGetPostList()
  ])
}