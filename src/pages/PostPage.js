import React from 'react'
import { Post, CreatePost } from '../components/Posts'
import {useDispatch} from "react-redux"

const PostPage = props => {
  const { match : {params : {path} } } = props
  const dispatch = useDispatch()
  return (
      <>
        {/*{ path === 'detail' && <Post/>}*/}
        { path === 'create' && <CreatePost dispatch={dispatch}/>}
      </>
  )
}

export default PostPage