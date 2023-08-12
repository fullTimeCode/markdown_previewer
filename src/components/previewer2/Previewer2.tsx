import './previewer2.scss'
import PropTypes from 'prop-types'
import { marked } from 'marked'
import { VscPreview } from 'react-icons/vsc'
// you may need to install `yarn add prop-types`

type previewer2Props = {
  styleNames: string
  text: string
}

const Previewer2 = ({ styleNames, text }: previewer2Props) => {
  const createMarkDown = () => {
    return {
      __html: marked(text, {
        breaks: true,
      }),
    }
  }
  return (
    <div className={`previewer2 ${styleNames}`}>
      <VscPreview size={70} />
      <div
        className=''
        id='preview'
        dangerouslySetInnerHTML={createMarkDown()}></div>
      {/* add your code here  */}
    </div>
  )
}

Previewer2.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default Previewer2
