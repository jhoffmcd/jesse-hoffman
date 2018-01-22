import { h, Component } from 'preact'
import DefaultLayout from '../../layout/default'

import ThumbGrid from '../../components/thumbs/grid'

export default class Home extends Component {
  render () {
    return (
      <DefaultLayout>
        <ThumbGrid />
      </DefaultLayout>
    )
  }
}
