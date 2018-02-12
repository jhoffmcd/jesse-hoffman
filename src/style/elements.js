import ms from 'modularscale-js'
import timings from './timings'
import colors from './colors'
import { config } from './standard-scale'

export default`
  a {
    color: ${colors.orange};
    text-decoration: none;
    transition: color ${timings.fast};

    &:hover {
      color: ${colors.orangeHover};
    }
  }

  p {
    margin: 0
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-family: 'Oswald', sans-serif;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    font-weight: normal;
    margin-bottom: ${ms(0, config)}rem;
    font-size: ${ms(2, config)}rem;

    small {
      display: block;
      font-size: ${ms(0.5, config)}rem;
    }
  }

  ul {
    margin-top: 0;
  }
`
