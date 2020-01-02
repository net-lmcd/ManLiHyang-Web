import React from 'react'
import { Post, SearchBook, ImageCrop } from '../components/Posts'
import {useDispatch} from "react-redux"

const PostPage = props => {
  const { match : {params : {path} }, history } = props
  const dispatch = useDispatch()
  return (
      <>
        {/*{ path === 'detail' && <Post/>}*/}
        { path === 'search' && <SearchBook dispatch={dispatch} history={history}/>}
        { path === 'crop' && <ImageCrop/>}

      </>
  )
}

export default PostPage