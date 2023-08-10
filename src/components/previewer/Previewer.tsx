import './previewer.scss'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
// you may need to install `yarn add prop-types`

type previewerProps = {
  styleNames: object | string
  text: string
}

const Previewer = ({ styleNames, text }: previewerProps) => {
  return <ReactMarkdown className={`previewer ${styleNames}`}>{text}</ReactMarkdown>
}

Previewer.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default Previewer
