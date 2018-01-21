import { h, Component } from 'preact'
import { css } from 'preact-emotion'

export default class ShortBio extends Component {
  render () {
    const shortBio = css`
      max-width: 330px;
      margin-left: auto;
      margin-right: auto;
    `
    return (
      <p class={shortBio}>Technical Lead and web consultant for progressive modular web applications. Maker of the coffee.</p>
    )
  }
}
