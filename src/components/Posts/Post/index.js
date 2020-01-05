import React from 'react'
import './index.scss'

const Post = ({posts}) => {

  const thumbnail = 'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F3760708%3Ftimestamp%3D20200102131227'

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
        <div className="contents-box">
          <img src={thumbnail} className="blur"/>
          <div className="content">
            <div className="more-icon">
              <img src="/assets/icon-more.png" alt=""/>
            </div>
            <div className="thumbnail">
              <img src={thumbnail} alt=""/>
            </div>
            <div className="description">
            작게 잡고 성공 하는 것이 문제다.
              목표를 크게 잡고 실패하는 것은 문제가 아니다. 목표를 작게 잡고 성공 하는 것이 문제다.

            </div>
            <div className="title">
              <div>우아한 형제들 中</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Post