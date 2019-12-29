import React from 'react'
import { Post, CreatePost } from '../components/Posts'

const PostPage = props => {
  const { match : {params : {path} } } = props
  return (
      <>
        {/*{ path === 'detail' && <Post/>}*/}
        { path === 'create' && <CreatePost/>}
      </>
  )
}

export default PostPage