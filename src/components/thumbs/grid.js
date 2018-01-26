import { h, Component } from 'preact'
import styled from 'preact-emotion'
import breakpoints from '../../style/breakpoints'

import Thumb from './thumb'

const thumbsData = [1, 2, 3, 4]

export default class ThumbGrid extends Component {
  getThumbs () {
    return thumbsData.map((thumb, i) => {
      return <Thumb />
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
