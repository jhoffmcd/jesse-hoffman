import { h, Component } from 'preact'
import styled from 'preact-emotion'
import breakpoints from '../../style/breakpoints'
import config from '../../config'

import Thumb from './thumb'

export default class ThumbGrid extends Component {
  getThumbs () {
    return config.projects.map(project => {
      return <Thumb {...project} />
    })
  }
  render () {
    const Wrapper = styled.div`
      ${breakpoints.phoneSmall} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
      }
    `
    return (
      <Wrapper>
        {this.getThumbs()}
      </Wrapper>
    )
  }
}
