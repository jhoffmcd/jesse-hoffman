import breakpoints from './breakpoints'
import elements from './elements'

export default`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: ${28 / 20};
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${breakpoints.phoneSmall} {
      font-size: 18px;
    }

    ${breakpoints.desktopSmall} {
      font-size: 20px;
    }
  }

  * {
    box-sizing: border-box;
  }

  #app {
    height: 100%;
    padding-top: 60px;

    ${breakpoints.tablet} {
      padding-top: 100px;
    }

    ${breakpoints.desktop} {
      padding-top: 10vw;
    }
  }

  ${elements}
`
