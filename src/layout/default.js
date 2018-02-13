import { h, Component } from 'preact'
import styled, { css } from 'preact-emotion'
import breakpoints from '../style/breakpoints'
import { flush, standard, config } from '../style/standard-scale'
import colors from '../style/colors'
import ms from 'modularscale-js'

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
        grid-template-columns: 4fr 8fr;
        grid-gap: ${ms(4, config)}rem 20px;
      }

      ${breakpoints.layoutSwitch} {
        grid-template-columns: 3fr 1fr 8fr;
      }

      > *:nth-child(2) {
        ${breakpoints.layoutSwitch} {
          grid-column-start: 3;
        }
      }
    `

    const aside = css`
      text-align: center;

      ${breakpoints.tablet} {
        padding: 0 ${ms(2, config)}rem;
      }

      ${breakpoints.layoutSwitch} {
        padding: 0;
      }

      > * {
        ${standard}

        &:last-child {
          ${breakpoints.tablet} {
            ${flush}
          }
        }
      }
    `

    const Footer = styled.footer`
      color: ${colors.lighterGrey};
      font-size: ${ms(-0.5, config)}rem;
      padding: ${ms(4, config)}rem ${ms(-3, config)}rem;
      text-align: center;
      border-top: 1px solid ${colors.lighterGrey};

      ${breakpoints.tablet} {
        font-size: ${ms(-1, config)}rem;
        grid-column: 1 / span 3;
        grid-row: 2;
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
          { props.children }
        </section>
        <Footer>
          &copy; {new Date().getFullYear()}, Jesse Hoffman. <br />
          Built with <a href='https://github.com/developit/preact-cli' target='_blank' rel='noopener'>Preact CLI</a> and <a href='https://github.com/emotion-js/emotion' target='_blank' rel='noopener'>Emotion CSS-in-JS</a>.
        </Footer>
      </Grid>
    )
  }
}
