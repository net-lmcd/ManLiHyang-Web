import React, {useRef} from 'react'

const TestPage = () => {
  const testRef = useRef('')
  const attachNode = () => {
    const container = testRef.current
    const c_node = document.createElement('li')
    const node = `<li>2</li>`
    c_node.innerHTML = node

    container.appendChild(c_node)
  }
  return(
      <div>
        <button onClick={()=>attachNode()}>생성</button>
        <ul ref={testRef}>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
  )
}

export default TestPage