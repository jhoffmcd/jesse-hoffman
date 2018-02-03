import { h, Component } from 'preact'
import { css } from 'preact-emotion'
import DefaultLayout from '../../layout/default'
import editorial from '../../style/editorial'
import Test from '../../content/test'
import Test2 from '../../content/test2'

export default class Home extends Component {
  render () {
    return (
      <DefaultLayout>
        <div class={css(editorial)}>
          Test
        </div>
      </DefaultLayout>
    )
  }
}
