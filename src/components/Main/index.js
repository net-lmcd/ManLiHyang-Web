import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { Post } from "../Posts"
import {getPostList} from "../../store/actions/posts"
import { SearchInput } from "../Common"
import './index.scss'

const Main = props => {
  const [ searchValue, setSearchValue ] = useState('')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPostList())
  },[])
  return (
      <div className="main-wrap">
        <div className="search-bar">
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isMainPage={true}
          />
          <button className="sort-btn">최신순</button>
        </div>
        <Post/>
        <Post/>
      </div>
  )
}

export default Main
