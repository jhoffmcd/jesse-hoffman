import { h } from 'preact'
import { css } from 'preact-emotion'

const Thumb = ({ children, ...props }) => {
  const thumb = css`
    display: block;
    max-width: 100%;
  `

  const inheritedStyles = props.styles ? css(props.styles) : null

  return (
    <a href='#' class={inheritedStyles}>
      <img src='http://via.placeholder.com/400x300/0017bf/ffffff?text=4:3' class={thumb} />
    </a>
  )
}

export default Thumb
