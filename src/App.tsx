import { useState } from 'react'
// import { BiReset, BiPlus, BiMinus } from 'react-icons/bi'

import { Previewer, Editor } from './components'

function App() {
  const [text, setText] = useState<string>('')
  const styles = 'dark size'
  return (
    <>
      <h1>Markdown Previewer</h1>
      <main className='App'>
        <Editor
          styleNames={styles}
          text={text}
          setText={setText}
        />
        <Previewer
          styleNames={styles}
          text={text}
        />
      </main>
    </>
  )
}

export default App
