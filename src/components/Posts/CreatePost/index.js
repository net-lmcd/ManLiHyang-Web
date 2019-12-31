import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getBook } from "../../../store/actions/books"
import './index.scss'

const CreatePost = props => {
  const [searchValue, setSearchValue] = useState('')
  const { dispatch } = props
  const { bookList, is_end } = useSelector(state => state.books)
  const handleCategory = (e, type) => {}
  const handleKeyUp = e => {
    if(e.keyCode === 13) handleSearchBook(searchValue)
  }
  const handleSearchBook = name => {
    if(name) dispatch(getBook({query : name}))
  }
  const mapToBookList = bookList => {
    return bookList.map( (book, idx) => {
      const { thumbnail, title, publisher, authors } = book
      return(
          <li key={idx}>
            {thumbnail ?
                <img src={thumbnail} alt=""/>
                :
                <img src="/assets/bamin.png" alt=""/>
            }
            <div className="book-info">
              <span className="book-title">{title}</span>
              <span className="book-author">{authors.map(ele => ele+' ')} 지음 | {publisher}</span>
            </div>
          </li>
      )
    })
  }


  return(
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
                 onClick={()=>setSearchValue('')}
            />
            <input type="text"
                   placeholder="Search"
                   value={searchValue}
                   onKeyUp={e => handleKeyUp(e)}
                   onChange={(e)=>setSearchValue(e.target.value)}
            />
          </div>
          <button onClick={()=>handleSearchBook(searchValue)}>Search</button>
        </div>
        <div className="contents-wrap">
          <ul>
            {bookList.length > 0 &&
                mapToBookList(bookList)
            }
            <li>
              <img src="/assets/bamin.png" alt=""/>
             <div className="book-info">
                <span className="book-title">리액티브 프로그들래밍</span>
                <span className="book-author">홍동욱 지음 | 우아한 형제들</span>
              </div>
           </li>
          </ul>
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