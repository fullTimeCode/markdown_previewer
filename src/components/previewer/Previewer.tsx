import './previewer.scss'
import PropTypes from 'prop-types'

// you may need to install `yarn add prop-types`

type previewerProps = {
  styleNames: object | string
  text: string
}

const Previewer = ({ styleNames, text }: previewerProps) => {
  return (
    <div className={`previewer ${styleNames}`}>
      <h2>Previewer</h2>
      <p>{text}</p>
      {/* add your code here  */}
    </div>
  )
}

Previewer.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default Previewer
