import timings from './timings'
import colors from './colors'

export default`
  a {
    color: ${colors.orange};
    text-decoration: none;
    transition: color ${timings.fast};
  }

  p {
    margin: 0
  }
`
