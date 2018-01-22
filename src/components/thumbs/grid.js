import { h, Component } from 'preact'
import styled from 'preact-emotion'
import breakpoints from '../../style/breakpoints'
import { standard, flush } from '../../style/standard-scale'

import Thumb from './thumb'

const thumbsData = [1, 2, 3, 4]

export default class ThumbGrid extends Component {
  getThumbs () {
    return thumbsData.map((thumb, i) => {
      const translateX = i % 2 ? `${100 + (40 / 746 * 100)}%` : 0
      const translateY = 0

      const position = {
        top: 0,
        left: 0,
        transform: `translate(${translateX}, ${translateY})`
      }
      return <Thumb styles={position} />
    })
  }
  render () {
    const Wrapper = styled.div`
      position: relative;

      > * {

        ${breakpoints.phone} {
          position: absolute;
          max-width: ${363 / 746 * 100}%;
        }
      }

      img {
        margin-left: auto;
        margin-right: auto;
        ${standard}

        ${breakpoints.phone} {
          margin-left: 0;
          margin-right: 0;
          ${flush}
        }
      }
    `
    return (
      <Wrapper>
        {this.getThumbs()}
      </Wrapper>
    )
  }
}
