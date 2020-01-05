import React from 'react'
import './index.scss'

const Post = props => {
  return(
      <div className="post-wrap">
        <div className="post-header">
          <img src="/assets/user-profile.png"
               className="profile"
               alt=""/>
            <span className="user-name">Megi</span>
            <span className="created-date">11월 1일</span>
            <div className="comment">
              <img src="/assets/comment.png"
                   alt=""
                   className="comment-btn"
              />
              <span className="count">51</span>
            </div>
            <div className="like">
              <img src="/assets/like-off.png"
                   alt=""
                   className="like-btn"
              />
              {false && <img src="/assets/like-on.png"
                             alt=""
                             className="like-btn"
              />}
              <span className="count">51</span>
            </div>
            <img src="/assets/share-btn.png"
                 alt=""
                 className="share-btn"
            />
        </div>
        <div>

        </div>
      </div>
  )
}

export default Post