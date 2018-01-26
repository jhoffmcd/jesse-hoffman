import { h } from 'preact'
import { css } from 'preact-emotion'
import breakpoints from '../../style/breakpoints'
import { flush, standard } from '../../style/standard-scale'

const Thumb = ({ children, ...props }) => {
  const link = css``
  const thumb = css`
    display: block;
    margin: 0 auto;
    ${standard}
    max-width: 100%;

    ${breakpoints.phoneSmall} {
        ${flush}
      }
  `

  console.log(props)

  return (
    <a href='#' class={link}>
      <img src={`assets/thumbs/${props.assets.thumb}`} class={thumb} />
    </a>
  )
}

export default Thumb
