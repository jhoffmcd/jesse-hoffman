import { h, Component } from 'preact'
import { css } from 'preact-emotion'
import breakpoints from '../style/breakpoints'

export default class Logo extends Component {
  render () {
    const logo = css`
      width: 70%;
      max-width: 260px;
      margin-bottom: 30px;

      ${breakpoints.xSmall} {
        width: 100%;
      }

      ${breakpoints.tablet} {
        width: 100%;
        margin-bottom: 50px;
      }
    `

    const jointPath = css`
      fill: #fff;
    `

    return (
      <svg xmlns='http://www.w3.org/2000/svg' class={logo} viewBox='0 0 261.97 206.84'>
        <defs>
          <linearGradient id='blue-gradient' x1='-64.66' y1='472.58' x2='-101.74' y2='330.34' gradientTransform='rotate(-30.7 -569.644 -155.51)' gradientUnits='userSpaceOnUse'>
              <stop offset='0' stop-color='#0fb'/>
              <stop offset='.19' stop-color='#00c9c5'/>
              <stop offset='.38' stop-color='#009acd'/>
              <stop offset='.53' stop-color='#007dd2'/>
              <stop offset='.61' stop-color='#0072d4'/>
              <stop offset='.65' stop-color='#0061d0'/>
              <stop offset='.75' stop-color='#0041c9'/>
              <stop offset='.84' stop-color='#002ac3'/>
              <stop offset='.93' stop-color='#001cc0'/>
              <stop offset='1' stop-color='#0017bf'/>
          </linearGradient>
        </defs>
        <path d='M0 202.71a11.47 11.47 0 0 0 3.85-.48 2.83 2.83 0 0 0 1.7-1.79 12.73 12.73 0 0 0 .46-4V164.6h5.71v31.94a18.72 18.72 0 0 1-.77 5.94 5.72 5.72 0 0 1-2.72 3.29 11.63 11.63 0 0 1-5.48 1.07H0zM20.58 205a6.88 6.88 0 0 1-2.65-3.85 24 24 0 0 1-.76-6.62v-6.73c0-4.07.64-7.06 1.91-8.94s3.54-2.83 6.8-2.83a8.34 8.34 0 0 1 5.38 1.48 7.17 7.17 0 0 1 2.39 4.15 35.15 35.15 0 0 1 .59 7.21v2.4H22.62v5.91a7.25 7.25 0 0 0 .79 3.89 2.8 2.8 0 0 0 2.52 1.2 2.39 2.39 0 0 0 2.35-1.2 8.44 8.44 0 0 0 .61-3.64v-1.78h5.3v1.12c0 3.09-.67 5.45-2 7.08s-3.43 2.45-6.32 2.45a9.33 9.33 0 0 1-5.29-1.3zm8.31-16.69v-2.65a11.31 11.31 0 0 0-.59-4.3 2.41 2.41 0 0 0-2.47-1.3 2.93 2.93 0 0 0-2 .61 3.44 3.44 0 0 0-.94 2 23.17 23.17 0 0 0-.26 4.05v1.58zM40.22 204a9.24 9.24 0 0 1-2.52-6l4.53-1.37a9.6 9.6 0 0 0 1.41 4.22 3.26 3.26 0 0 0 2.82 1.38 2.91 2.91 0 0 0 2.22-.84 3.17 3.17 0 0 0 .79-2.27 4.71 4.71 0 0 0-.56-2.29 7.88 7.88 0 0 0-1.83-2.09l-5-4.33a12 12 0 0 1-2.67-3.13 8.09 8.09 0 0 1-1-4.05 7 7 0 0 1 2-5.33A7.82 7.82 0 0 1 46 176a6.65 6.65 0 0 1 5.27 2.17 9.5 9.5 0 0 1 2.22 5.58l-3.67 1.37a9.78 9.78 0 0 0-1.18-3.79 2.67 2.67 0 0 0-2.44-1.3 2.75 2.75 0 0 0-2.12.86 3.09 3.09 0 0 0-.78 2.11 3.93 3.93 0 0 0 1.48 3l5.2 4.79a17.75 17.75 0 0 1 3.08 3.61 8.15 8.15 0 0 1 1.1 4.33 7.06 7.06 0 0 1-2.2 5.61 8.65 8.65 0 0 1-6 1.94 7.77 7.77 0 0 1-5.74-2.28zM59.27 204a9.34 9.34 0 0 1-2.52-6l4.54-1.37a9.61 9.61 0 0 0 1.4 4.22 3.28 3.28 0 0 0 2.83 1.38 2.87 2.87 0 0 0 2.21-.84 3.17 3.17 0 0 0 .79-2.27 4.6 4.6 0 0 0-.56-2.29 7.54 7.54 0 0 0-1.83-2.09l-5-4.33a12 12 0 0 1-2.67-3.13 8.09 8.09 0 0 1-.94-4.05 7 7 0 0 1 2-5.33 7.79 7.79 0 0 1 5.54-1.9 6.64 6.64 0 0 1 5.27 2.17 9.44 9.44 0 0 1 2.22 5.58l-3.67 1.37a10 10 0 0 0-1.17-3.79 2.7 2.7 0 0 0-2.45-1.3 2.73 2.73 0 0 0-2.11.86 3 3 0 0 0-.79 2.14 3.9 3.9 0 0 0 1.48 3l5.16 4.76a17.83 17.83 0 0 1 3.09 3.61 8.23 8.23 0 0 1 1.09 4.33 7.09 7.09 0 0 1-2.18 5.61 8.69 8.69 0 0 1-6 1.94 7.77 7.77 0 0 1-5.73-2.28zM80.14 205a6.88 6.88 0 0 1-2.65-3.85 23.65 23.65 0 0 1-.76-6.62v-6.73c0-4.07.63-7.06 1.91-8.94s3.54-2.83 6.8-2.83a8.31 8.31 0 0 1 5.37 1.48 7.13 7.13 0 0 1 2.4 4.15 35.26 35.26 0 0 1 .58 7.21v2.4H82.18v5.91a7.25 7.25 0 0 0 .79 3.89 2.79 2.79 0 0 0 2.52 1.2 2.37 2.37 0 0 0 2.34-1.2 8.27 8.27 0 0 0 .62-3.64v-1.78h5.29v1.12q0 4.63-2 7.08t-6.32 2.45a9.31 9.31 0 0 1-5.28-1.3zm8.31-16.69v-2.65a11.31 11.31 0 0 0-.59-4.3 2.42 2.42 0 0 0-2.47-1.3 2.94 2.94 0 0 0-2 .61 3.51 3.51 0 0 0-.94 2 24.41 24.41 0 0 0-.25 4.05v1.58zM110.86 164.6h5.76v17.83h10.59V164.6H133v41.27h-5.76v-19.31h-10.62v19.31h-5.76zM140.43 203.5c-1.3-1.85-2-4.54-2-8.08v-8.56c0-3.53.66-6.22 2-8.07S144 176 147.08 176s5.29.93 6.6 2.78 2 4.54 2 8.07v8.56q0 5.31-2 8.08t-6.6 2.78q-4.68.01-6.65-2.77zm8.79-2.12a4.26 4.26 0 0 0 .82-2.14 31 31 0 0 0 .15-3.46v-9.22a32 32 0 0 0-.15-3.49 4.33 4.33 0 0 0-.82-2.17 2.53 2.53 0 0 0-2.14-.86 2.61 2.61 0 0 0-2.16.86 4.17 4.17 0 0 0-.84 2.17 29.28 29.28 0 0 0-.16 3.49v9.22a28.39 28.39 0 0 0 .16 3.46 4.1 4.1 0 0 0 .84 2.14 2.59 2.59 0 0 0 2.16.87 2.51 2.51 0 0 0 2.14-.87zM162.37 180.44h-3.52v-4h3.52v-1.53a21.57 21.57 0 0 1 .45-4.91 4.87 4.87 0 0 1 1.87-2.88 6.79 6.79 0 0 1 4-1 18.78 18.78 0 0 1 3.57.35v4a8.39 8.39 0 0 0-2-.26 2 2 0 0 0-2 .95 6.57 6.57 0 0 0-.48 2.87v2.45h4.48v4h-4.48v25.43h-5.45zm13.3 0h-3.52v-4h3.52v-1.53a21.57 21.57 0 0 1 .45-4.91 4.9 4.9 0 0 1 1.88-2.9 6.84 6.84 0 0 1 4.05-1 18.78 18.78 0 0 1 3.57.35v4a8.39 8.39 0 0 0-2-.26 2 2 0 0 0-2 .95 6.57 6.57 0 0 0-.48 2.87v2.45h4.48v4h-4.48v25.43h-5.45zM188.55 176.42h5v2.8a10.52 10.52 0 0 1 3.23-2.47 8.45 8.45 0 0 1 3.7-.84 4.55 4.55 0 0 1 4.78 3.72 9.23 9.23 0 0 1 7.34-3.72 4.7 4.7 0 0 1 3.74 1.68 7.72 7.72 0 0 1 1.46 5.15v23.13h-5v-22.78a4.5 4.5 0 0 0-.66-2.82 2.31 2.31 0 0 0-1.88-.79 5.15 5.15 0 0 0-2.35.63 8.21 8.21 0 0 0-2.24 1.76v24h-5v-22.78a4.5 4.5 0 0 0-.66-2.82 2.33 2.33 0 0 0-1.89-.79 5 5 0 0 0-2.29.63 8.72 8.72 0 0 0-2.29 1.76v24h-5zM225.46 205.31a6.68 6.68 0 0 1-2.11-2.55 7.5 7.5 0 0 1-.76-3.31 9.83 9.83 0 0 1 1.47-5.63 11 11 0 0 1 3.77-3.44 56.69 56.69 0 0 1 6.37-2.9v-2.09a9.94 9.94 0 0 0-.59-4.1 2.36 2.36 0 0 0-2.36-1.2c-2.08 0-3.11 1.39-3.11 4.18v1.47l-5.4-.2c.07-3.26.81-5.66 2.24-7.21s3.63-2.32 6.62-2.32c2.82 0 4.87.78 6.14 2.32s1.91 3.88 1.91 7v13.45a53.12 53.12 0 0 0 .51 7.08h-5c-.37-1.94-.61-3.38-.71-4.33a7.52 7.52 0 0 1-2.12 3.36 5.45 5.45 0 0 1-3.84 1.38 5.12 5.12 0 0 1-3.03-.96zm7.26-4.56a6.46 6.46 0 0 0 1.48-1.61v-8.35a32.31 32.31 0 0 0-3.39 2.11 8.26 8.26 0 0 0-2 2.07 4.85 4.85 0 0 0-.79 2.8 5.07 5.07 0 0 0 .66 2.82 2.17 2.17 0 0 0 1.94 1 3.23 3.23 0 0 0 2.1-.84zM244.9 176.42h5.45v2.9c2.35-2.2 4.74-3.31 7.19-3.31a3.65 3.65 0 0 1 3.41 1.73 8.34 8.34 0 0 1 1 4.28v23.85h-5.45V183.6a4.77 4.77 0 0 0-.51-2.49 2 2 0 0 0-1.84-.82 6.39 6.39 0 0 0-3.82 1.84v23.74h-5.43z'/>
        <path fill='url(#blue-gradient)' d='M130.89 0l-65.9 38.05v76.09l65.9 38.04 65.9-38.04V38.05L130.89 0z'/>
        <path class={jointPath} d='M119.8 112.45a2.29 2.29 0 0 1-1.68-.71 2.33 2.33 0 0 1 0-3.31L154.59 73l-53-28.9a2.35 2.35 0 0 1 2.21-4.1l55.83 30.43a2.35 2.35 0 0 1 .51 3.74l-38.71 37.61a2.32 2.32 0 0 1-1.63.67z'/>
        <path class={jointPath} d='M102.68 34.26a7.82 7.82 0 1 0 0 15.64 7.82 7.82 0 1 0 0-15.64zM119.64 99.16a10.95 10.95 0 1 0 0 21.9 10.95 10.95 0 1 0 0-21.9zM158.5 58.42a14.08 14.08 0 1 0 0 28.16 14.08 14.08 0 1 0 0-28.16z'/>
      </svg>
    )
  }
}
