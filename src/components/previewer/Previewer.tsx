import './previewer.scss'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { VscPreview } from 'react-icons/vsc'
import remarkBreaks from 'remark-breaks'
import { marked } from 'marked'

type previewerProps = {
  styleNames: object | string
  text: string
  id: string
}

const Previewer = ({ styleNames, text }: previewerProps) => {
  // console.log(ReactMarkdown)
  // const Options = {
  //   breaks: true,
  // }

  console.log(marked(text, { breaks: true }))
  const markedText = marked(text, { breaks: true })
  const createMarkup = () => {
    console.log(marked(text))
    return { __html: marked(text, { breaks: true }) }
  }
  return (
    <section
      id='preview'
      className={`previewer ${styleNames}`}>
      <VscPreview size={70} />
      {/* <ReactMarkdown
        children={text}
        remarkPlugins={[remarkBreaks, remarkGfm]}
      /> */}
      <div
        className=''
        id='preview'>
        {text}
      </div>
    </section>
  )
}

Previewer.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default Previewer
