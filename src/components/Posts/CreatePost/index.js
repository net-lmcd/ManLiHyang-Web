import React, { useRef } from 'react'
import './index.scss'

const CreatePost = props => {
  const handleCategory = (e, type) => {

  }
  return(
    <div className="wrap">
      <div className="create-footer">
        <span>라이브러리</span>
        <span>사진</span>
        <span onClick={(e)=>handleCategory(e,'search')}>검색</span>
      </div>
    </div>
  )
}

export default CreatePost