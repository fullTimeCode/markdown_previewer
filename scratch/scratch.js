import React from 'react'
import ReactDOM from 'react-dom/client'

class Editor extends React.Component {
    
  render() {
    return (
      <section>
        <h2>Editor</h2>
        <textarea
          id='editor'
          cols='30'
          rows='10'></textarea>
      </section>
    )
  }
}

class Previewer extends React.Component {
  render() {
    return (
      <section
        id='preview'
        className='preview'></section>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
    }
  }
  render() {
    return (
      <>
        <h1>App</h1>
        <main className='App'>
          <Editor textState={this.state} />
          <Previewer text={this.state.text} />
        </main>
      </>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
