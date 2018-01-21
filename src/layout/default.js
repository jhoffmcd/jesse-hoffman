import { h, Component } from 'preact'
import styled, { css } from 'preact-emotion'
import breakpoints from '../style/breakpoints'
import { flush, standard } from '../style/standard-scale'

import Logo from '../components/logo'
import ShortBio from '../components/short-bio'
import Social from '../components/social'

export default class DefaultLayout extends Component {
  render (props) {
    const Grid = styled.div`
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
      max-width: 1200px;

      ${breakpoints.tablet} {
        display: grid;
        grid-template-columns: 3fr 1fr 8fr;
        grid-gap: 20px;
      }

      > *:last-child {
        grid-column-start: 3;
      }
    `

    const aside = css`
      text-align: center;

      > * {
        ${standard}

        &:last-child {
          ${breakpoints.tablet} {
            ${flush}
          }
        }
      }
    `

    return (
      <Grid>
        <aside class={aside}>
          <Logo />
          <ShortBio />
          <Social />
        </aside>
        <section>
          This is the main content.
          { props.children }
        </section>
      </Grid>
    )
  }
}
