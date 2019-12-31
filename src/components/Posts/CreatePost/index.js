import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {getBook, setBookName} from "../../../store/actions/books"
import Books from '../../Books'
import './index.scss'

const CreatePost = props => {
  const [searchValue, setSearchValue] = useState('')
  const {dispatch} = props
  const books = useSelector(state => state.books)
  const handleCategory = (e, type) => {}
  const handleKeyUp = e => {
    if (e.keyCode === 13) handleSearchBook(searchValue)
  }
  const handleSearchBook = async name => {
    if (name) {
      dispatch(setBookName(name))
      dispatch(getBook({query: name, page: 1}))
    }
  }


  return (
      <div className="wrap">
        <div className="create-page-wrap">
          <Link to="/" className="close-btn">
            <img src="/assets/close.png"/>
          </Link>
          <div className="search-box">
            <div className="input-area">
              <img src="/assets/icon-search.png" className="input-search"/>
              <img src="/assets/button-cancel.png"
                   className="input-cancel"
                   onClick={() => setSearchValue('')}
              />
              <input type="text"
                     placeholder="Search"
                     value={searchValue}
                     onKeyUp={e => handleKeyUp(e)}
                     onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <button onClick={() => handleSearchBook(searchValue)}>Search</button>
          </div>
          <Books
              books={books}
              dispatch={dispatch}
              onGetBook={getBook}
          />
        </div>
        <div className="create-footer">
          <span>라이브러리</span>
          <span>사진</span>
          <span onClick={() => handleCategory('search')}>검색</span>
        </div>
      </div>
  )
}

export default CreatePost