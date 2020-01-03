import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import './index.scss'

// save 버튼 글자 없으면 색깔 다름

const CreatePost = props => {
  const { history, dispatch } = props
  const { thumbnail, bookName } = useSelector(state => state.books)

  const handleInputMode = () => {

  }
  return(
      <div className="create-wrap">
        <img src={thumbnail} alt="" className="background-thumbnail"/>
        <div className="gray-zone">
          <div className="btn-section">
             <img src="/assets/white-cancel.png" alt=""/>
            <span className="contents-length">0/500</span>
            <span className="save-btn">Save</span>
          </div>
          <button className="description" onClick={handleInputMode}>
            화면을 터치해서 <br/>
            글귀를 입력하세요.
          </button>
          <div className="book-title">{bookName} 中</div>
        </div>
        <div className="thumbnail-section">
          <img src={thumbnail} alt=""/>
        </div>
      </div>
  )
}

export default CreatePost