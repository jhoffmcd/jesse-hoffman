import breakpoints from './breakpoints'

export const standard = `
    margin-bottom: 30px;

    ${breakpoints.tablet} {
        margin-bottom: 50px;
    }
`

export const flush = `
    margin-bottom: 0;
`
