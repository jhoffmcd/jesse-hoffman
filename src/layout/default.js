import { h, Component } from 'preact'
import styled, { css } from 'preact-emotion'
import breakpoints from '../style/breakpoints'

import Logo from '../components/logo'

export default class DefaultLayout extends Component {
  render (props) {
    const Grid = styled.div`
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
      max-width: 1200px;

      ${breakpoints.tablet} {
        display: grid;
        grid-template-columns: 280px 1fr;
        grid-gap: 20px;
      }
    `

    const aside = css`
      text-align: center;
    `

    return (
      <Grid>
        <aside class={aside}>
          <Logo />
        </aside>
        <section>
          This is the main content.
          { props.children }
        </section>
      </Grid>
    )
  }
}
