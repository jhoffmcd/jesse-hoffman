import ms from 'modularscale-js'
import { config } from './standard-scale'

export default`
  p {
    margin-bottom: ${ms(1, config)}rem;
    font-size: ${ms(-1, config)}rem;
    line-height: 1.7;
  }
`
