import './editor.scss'
import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type editorProps = {
  styleNames: object | string
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

const Editor = ({ styleNames, text, setText }: editorProps) => {
  return (
    <div className={`editor ${styleNames}`}>
      <h2>Editor</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          value={text}
          id='editor'
          onChange={(e) => setText(e.target.value)}></textarea>
      </form>
    </div>
  )
}

Editor.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default Editor
