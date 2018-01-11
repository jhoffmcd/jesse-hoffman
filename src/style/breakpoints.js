const breakpointsRef = {
  xSmall: 480,
  phone: 640,
  tablet: 768,
  desktop: 1200,
}

const breakpoints = {}

Object.keys(breakpointsRef).forEach(key => {
  breakpoints[key] = `@media (min-width: ${breakpointsRef[key]}px)`
})

export default breakpoints
