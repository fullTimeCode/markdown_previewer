import { useState } from 'react'
import { BiReset, BiPlus, BiMinus } from 'react-icons/bi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Markdown Previewer</h1>
      <div className='display'> {count}</div>
      <div className=''>
        <button onClick={() => setCount((count) => count + 1)}>
          <BiPlus />
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          <BiMinus />
        </button>
        <button onClick={() => setCount(0)}>
          <BiReset />
        </button>
      </div>
    </>
  )
}

export default App
