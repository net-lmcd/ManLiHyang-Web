import {all, put, call, takeEvery} from "redux-saga/effects"
import axios from 'axios'
import {GET_POST_LIST, SUCCESS_GET_POST_LIST, FAILURE_GET_POST_LIST} from "../actions/posts"
import {GET_BOOKS, FAILURE_GET_BOOKS, SUCCESS_GET_BOOKS} from "../actions/books"


export function* getPostList(action) {
  try {
    const {data} = yield call(axios, action.payload)
    yield put({type: SUCCESS_GET_POST_LIST, payload: data})
  } catch (err) {
    yield put({type: FAILURE_GET_POST_LIST, err})
  }
}

export function* getBooks(action) {
  try {
    const result = yield call(axios, action.payload)
    yield put({type: SUCCESS_GET_BOOKS, payload: result})
  } catch (err) {
    yield put({type: FAILURE_GET_BOOKS, err})
  }
}

function* watchGetPostList() {
  yield takeEvery(GET_POST_LIST, getPostList)
}

function* watchGetBooks() {
  yield takeEvery(GET_BOOKS, getBooks)
}

export default function* rootSagas() {
  yield all([
    watchGetPostList(),
    watchGetBooks()
  ])
}