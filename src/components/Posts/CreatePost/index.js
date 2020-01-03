import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import './index.scss'

const CreatePost = props => {
  const { history, dispatch } = props
  const { thumbnail } = useSelector(state => state.books)

  return(
      <div className="create-wrap">
        <img src={thumbnail} alt="" className="background-thumbnail"/>
        <div className="gray-zone">
          <div className="btn-section">
            <Link to="/post/search" className="cancel-btn">&times;</Link>
            <span>0/500</span>
            <span>Save</span>
          </div>
        </div>
      </div>
  )
}

export default CreatePost