import breakpoints from './breakpoints'
import ms from 'modularscale-js'

export const config = {
  base: [1],
  ratio: 1.333
}

export const standard = `
    margin-bottom: ${ms(2, config)}rem;

    ${breakpoints.tablet} {
      margin-bottom: ${ms(3, config)}rem;
    }
`

export const flush = `
    margin-bottom: 0;
`
