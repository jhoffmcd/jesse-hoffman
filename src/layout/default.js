import { h, Component } from 'preact'
import styled from 'preact-emotion'
import breakpoints from '../style/breakpoints'

export default class DefaultLayout extends Component {
  render (props) {
    console.log(breakpoints)
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

    return (
      <Grid>
        <aside>
          This is the aside.
        </aside>
        <section>
          This is the main content.
          { props.children }
        </section>
      </Grid>
    )
  }
}
