import React, { useState } from 'react'
import { getBooks } from "../../../store/actions/books"
import './index.scss'

const CreatePost = props => {
  const [searchValue, setSearchValue] = useState('')
  const { dispatch } = props
  const handleCategory = (e, type) => {

  }
  const handleSearchBook = name => {
    dispatch(getBooks())
  }
  return(
    <div className="wrap">
      <div className="create-page-wrap">
        <div className="close-btn">
          <img src="/assets/close.png"/>
        </div>
        <div className="search-box">
          <div className="input-area">
            <img src="/assets/icon-search.png" className="input-search"/>
            <img src="/assets/button-cancel.png"
                 className="input-cancel"
                 onClick={()=>setSearchValue('')}
            />
            <input type="text"
                   placeholder="Search"
                   value={searchValue}
                   onChange={(e)=>setSearchValue(e.target.value)}
            />
          </div>
          <button onClick={()=>handleSearchBook(searchValue)}>Search</button>
        </div>
      </div>


      <div className="create-footer">
        <span>라이브러리</span>
        <span>사진</span>
        <span onClick={()=>handleCategory('search')}>검색</span>
      </div>
    </div>
  )
}

export default CreatePost