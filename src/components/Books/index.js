import React, {useState, useEffect, useRef} from 'react'
import './index.scss'


const Books = ({books, dispatch, onGetBook}) => {
  let tick = false
  const contentsRef = useRef('')
  const {bookList, is_end, page, bookName} = books
  const mapToBookList = bookList => {
    return bookList.map((book, idx) => {
      const {thumbnail, title, publisher, authors} = book
      return (
          <li key={idx}>
            {thumbnail ?
                <img src={thumbnail} alt=""/>
                :
                <img src="/assets/bamin.png" alt=""/> // bamin
            }
            <div className="book-info">
              <span className="book-title">{title}</span>
              <span className="book-author">{authors.map(ele => ele + ' ')} 지음 | {publisher}</span>
            </div>
          </li>
      )
    })
  }

  const eventHandler = () => {
    const {scrollHeight, clientHeight, scrollTop} = contentsRef.current
    if (scrollHeight - (scrollTop + clientHeight) < 10) {
      window.requestAnimationFrame( () => {
        if (!is_end && bookName && !tick) {
          tick = true
          dispatch(onGetBook({query: bookName, page}))
        }
      })
    }
  }
  useEffect(() => {
    tick = false
    window.addEventListener('scroll', eventHandler, true)
  }, [books])

  useEffect(()=>{
    return () => window.removeEventListener('scroll', eventHandler)
  },[])

  return (
      <div className="contents-wrap" ref={contentsRef}>
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
  )
}

export default Books