import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { Post } from "../Posts"
import {getPostList} from "../../store/actions/posts"

const Main = props => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPostList())
  },[])
  return (
      <>
        <Post/>
        <Post/>
      </>
  )
}

export default Main
