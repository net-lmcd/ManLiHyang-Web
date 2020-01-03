import React, {useState} from 'react'
import { useSelector } from "react-redux"
import './index.scss'

// save 버튼 글자 없으면 색깔 다름

const CreatePost = props => {
  const { history, dispatch } = props
  const [ mode, setMode ] = useState(false)
  const [ inputV, setInputV ] = useState('')
  const { bookInfo } = useSelector(state => state.books)

  return(
      <div className="create-wrap">
        <img src={bookInfo.thumbnail} alt="" className="background-thumbnail"/>
        <div className="gray-zone">
          <div className="btn-section">
             <img src="/assets/white-cancel.png" alt=""/>
            <span className="contents-length">
              {inputV ? inputV.length : 0}/500
            </span>
            <span className="save-btn"
             style={inputV ? { fontWeight : 'bold'} : { opacity : '0.6'}}
            >Save</span>
          </div>
          {mode ?
              <textarea
                     value={inputV}
                     autoFocus
                     maxLength={500}
                     onChange={ e => setInputV(e.target.value)}
              />
              :
              <button className="description" onClick={()=>setMode(true)}>
                화면을 터치해서 <br/>
                글귀를 입력하세요.
              </button>

          }
          <div className="book-title">{bookInfo.title} 中</div>
        </div>
        {!mode && <div className="thumbnail-section" onClick={()=>setMode(true)}>
          <img src={bookInfo.thumbnail} alt=""/>
        </div>}
      </div>
  )
}

export default CreatePost