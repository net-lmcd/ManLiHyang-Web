import React from 'react'
import { useSelector } from "react-redux"
import './index.scss'

const ImageCrop = props => {
  const { history } = props
  const { thumbnail } = useSelector(state => state.books)
  return(
      <div className="wrap">
        <div className="black-top">
          <div className="btn-section">
            <img src="/assets/back-btn.png" onClick={()=>history.goBack()}/>
            <span>Next</span>
          </div>
        </div>
        <div className="image-section">
          <img src={thumbnail} alt=""/>
        </div>
        <div className="black-bottom"/>
      </div>
  )
}

export default ImageCrop