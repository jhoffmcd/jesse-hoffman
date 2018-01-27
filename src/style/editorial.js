import ms from 'modularscale-js'
import { config, flush, standard } from './standard-scale'

export default`
  p {
    margin-bottom: ${ms(0, config)}rem;      
    font-size: ${ms(-1, config)}rem;
    line-height: 1.7;
  }
`
