import React, {useEffect, useRef} from 'react'
import './index.scss'

let last_scroll_position = 0
let windowHeight = window.innerHeight

const Books = ({books, dispatch, onGetBook}) => {
  const contentsRef = useRef('')
  const {bookList, is_end, page} = books
  const mapToBookList = bookList => {
    return bookList.map( (book, idx) => {
      const { thumbnail, title, publisher, authors } = book
      return(
          <li key={idx}>
            {thumbnail ?
                <img src={thumbnail} alt=""/>
                :
                <img src="/assets/bamin.png" alt=""/> // bamin
            }
            <div className="book-info">
              <span className="book-title">{title}</span>
              <span className="book-author">{authors.map(ele => ele+' ')} 지음 | {publisher}</span>
            </div>
          </li>
      )
    })
  }
  useEffect(()=>{
    const eventHandler = () => {
      last_scroll_position = window.scrollY
      let entireHeight = contentsRef.current.scrollHeight
      if(entireHeight < (windowHeight + last_scroll_position)){
        window.requestAnimationFrame( () => {
          // if(!is_end) dispatch(onGetBook({}))
        })
      }
    }
    if(bookList.length) window.addEventListener('scroll', eventHandler)
    return () => window.removeEventListener('scroll', eventHandler)
  },[bookList])
  return(
      <div className="contents-wrap">
        <ul ref={contentsRef}>
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
  )
}

export default Books