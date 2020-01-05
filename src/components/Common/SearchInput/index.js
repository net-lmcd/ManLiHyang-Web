import React from 'react'
import './index.scss'

export default props => {
  const { handleKeyUp, searchValue, setSearchValue, isMainPage } = props
  return(
      <div className="input-area">
        <img src="/assets/icon-search.png" className="input-search"/>
        {!isMainPage && <img src="/assets/button-cancel.png"
             className="input-cancel"
             onClick={() => setSearchValue('')}
        />}
        <input type="text"
               placeholder="Search"
               value={searchValue}
               onKeyUp={e => handleKeyUp(e)}
               onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
  )
}
