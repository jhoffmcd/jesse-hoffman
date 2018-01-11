const breakpointsRef = {
  tablet: 768
}

const breakpoints = {}

Object.keys(breakpointsRef).forEach(key => {
  breakpoints[key] = `@media (min-width: ${breakpointsRef[key]}px)`
})

export default breakpoints
