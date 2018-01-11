import breakpoints from './breakpoints'

export default`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fff;
    font-family: 'Helvetica Neue', arial, sans-serif;
    font-weight: 400;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    height: 100%;
    padding-top: 60px;

    ${breakpoints.tablet} {
      padding-top: 200px;
    }
  }
`
