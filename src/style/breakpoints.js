const breakpointsRef = {
  phoneSmall: 480,
  phone: 640,
  tablet: 768,
  desktopSmall: 960,
  desktop: 1200,
  layoutSwitch: 1320
}

const breakpoints = {}

Object.keys(breakpointsRef).forEach(key => {
  breakpoints[key] = `@media (min-width: ${breakpointsRef[key]}px)`
})

export default breakpoints
