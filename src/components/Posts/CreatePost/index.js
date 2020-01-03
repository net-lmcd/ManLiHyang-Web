import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import './index.scss'

// save 버튼 글자 없으면 색깔 다름

const CreatePost = props => {
  const { history, dispatch } = props
  const { thumbnail, bookName } = useSelector(state => state.books)


  return(
      <div className="create-wrap">
        <img src={thumbnail} alt="" className="background-thumbnail"/>
        <div className="gray-zone">
          <div className="btn-section">
             <img src="/assets/white-cancel.png" alt=""/>
            <span className="contents-length">0/500</span>
            <span className="save-btn">Save</span>
          </div>
          <div className="book-title">{bookName}</div>
        </div>
      </div>
  )
}

export default CreatePost