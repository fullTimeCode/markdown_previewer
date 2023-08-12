import { useState, useEffect } from 'react'

import { Previewer, Editor, Previewer2 } from './components'

function App() {
  const [text, setText] = useState<string>('')
  const styles = 'dark size'

  const handleOnSave = () => {
    localStorage.setItem('text', text)
  }

  useEffect(() => {
    const savedText = localStorage.getItem('text')
    if (savedText) {
      setText(savedText)
    }
  }, [])

  return (
    <>
      <main className='App'>
        <Editor
          styleNames={styles}
          text={text}
          setText={setText}
          handleOnSave={handleOnSave}
        />

        <Previewer2
          id='previewer'
          styleNames={styles}
          text={text}
        />
      </main>
    </>
  )
}

export default App
