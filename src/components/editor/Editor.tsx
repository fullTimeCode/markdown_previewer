import './editor.scss'
import PropTypes from 'prop-types'
import { VscOutput } from 'react-icons/vsc'
// you may need to install `yarn add prop-types`

type editorProps = {
  styleNames: object | string
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  handleOnSave: React.MouseEventHandler<HTMLButtonElement>
}

const Editor = ({ styleNames, text, setText, handleOnSave }: editorProps) => {
  return (
    <section className={`editor-wrapper ${styleNames}`}>
      <VscOutput size={70} />
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          value={text}
          id='editor'
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <button
          disabled={!text}
          id='save-btn'
          type='submit'
          onClick={handleOnSave}>
          Save
        </button>
      </form>
    </section>
  )
}

Editor.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default Editor
