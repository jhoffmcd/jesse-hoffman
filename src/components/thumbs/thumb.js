import { h } from 'preact'
import { css } from 'preact-emotion'
import ms from 'modularscale-js'
import breakpoints from '../../style/breakpoints'
import timings from '../../style/timings'
import colors from '../../style/colors'
import { config, standard, flush } from '../../style/standard-scale'

const Thumb = ({ children, ...props }) => {
  const link = css`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  `

  const thumb = css`
    display: block;
    margin: 0 auto;
    max-width: 100%;
    flex: 0 0 auto;
  `

  const thumbOverlay = css`
    width: 100%;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    font-size: ${ms(0, config)}rem;
    padding: ${ms(-2, config)}rem ${ms(-1, config)}rem;
    ${standard}
    display: flex;
    align-items: center;
    color: #fff;
    background: ${colors.lightGrey};

    ${breakpoints.phoneSmall} {
      ${flush}
      flex: 1 0 auto;
    }

    ${breakpoints.desktop} {
      position: absolute;
      top: 100%;
      left: 0;
      opacity: 0;
      transition: ${timings.default};

      .${link}:hover & {
        opacity: 1;
        transform: translateY(-100%);
      }
    }
  `

  const thumbIcon = css`
    fill: #fff;
    width: 18px;
    height: 20px;

    ${breakpoints.phoneSmall} {
      width: 24px;
      height: 27px;
    }
  `

  const thumbTitle = css`
    padding: 0 ${ms(-2, config)}rem;
    margin-top: -4px;
    line-height: normal;
  `

  return (
    <a href={props.href} class={link}>
      <img src={`assets/thumbs/${props.assets.thumb}`} class={thumb} />
      <div class={thumbOverlay}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130.74 146.02' class={thumbIcon}>
          <path d='M42 131.54a3.95 3.95 0 0 1-2.76-6.77l61.27-59.53-89.25-48.62A4 4 0 0 1 15 9.68l94 51.19a3.95 3.95 0 0 1 .87 6.3l-65.16 63.25a3.92 3.92 0 0 1-2.71 1.12z' />
          <path d='M13.15 0a13.15 13.15 0 1 0 0 26.3 13.15 13.15 0 1 0 0-26.3zM41.68 109.17a18.43 18.43 0 1 0 0 36.86 18.43 18.43 0 1 0 0-36.86zM107.07 40.66a23.68 23.68 0 1 0 0 47.36 23.68 23.68 0 1 0 0-47.36z' />
        </svg>
        <div class={thumbTitle}>{props.title}</div>
      </div>
    </a>
  )
}

export default Thumb
