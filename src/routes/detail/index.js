
import { h, Component } from 'preact'
import { css } from 'preact-emotion'
import ms from 'modularscale-js'
import find from 'lodash/find'
import DefaultLayout from '../../layout/default'
import editorial from '../../style/editorial'
import config from '../../config'
import { config as scaleConfig } from '../../style/standard-scale'
import breakpoints from '../../style/breakpoints'

export default class ProjectDetail extends Component {
  constructor (props) {
    super(props)

    this.project = find(config.projects, {route: props['project-name']})
  }

  getRoles () {
    return this.project.roles.map(role => {
      return <li>{role}</li>
    })
  }

  getTech () {
    return this.project.tech.map(tech => {
      return <li>{tech}</li>
    })
  }

  render () {
    const detailImage = css`
      max-width: 100%;
    `

    const detailHeader = css`
      display: flex;
      flex-direction: column;

      ${breakpoints.phoneSmall} {
        flex-direction: row;
        justify-content: space-between;

        > *:last-child {
          padding-left: ${ms(2, scaleConfig)}rem;
        }
      }
    `

    const detailHeading = css`
      margin-bottom: ${ms(-3, scaleConfig)}rem;
    `

    const detailExternalLink = css`
      display: flex;
      align-items: center;
      font-family: 'Oswald', sans-serif;
      text-transform: uppercase;

      > * {
        flex: 0 0 auto;

        &:first-child {
          padding-right: ${ms(-3, scaleConfig)}rem;
        }
      }
    `

    const detailExternalIcon = css`
      fill: currentColor;
      width: 14px;
      height: 13px;

      ${breakpoints.phoneSmall} {
        width: 17px;
        height: 15px;
      }
    `

    // const taxonomy = css`
    //   display: flex;
    // `

    // const taxonomyTitle = css`
    //   font-size: ${ms(0, scaleConfig)}rem;
    // `

    // const taxonomyList = css`
    //   list-style: none;

    //   > li {
    //     display: inline-block;
    //     padding: 0 ${ms(-2, scaleConfig)}rem;

    //     &::after {
    //       position: absolute;
    //       content: '//';
    //     }
    //   }
    // `

    return (
      <DefaultLayout>
        <div class={css(editorial)}>
          <img src={`/assets/main/${this.project.assets.main}`} class={detailImage} />
          <header class={detailHeader}>
            <h1 class={detailHeading}>
              {this.project.title}
              <small>Client // {this.project.client}</small>
            </h1>
            <div>
              <a href={this.project.external} target='_blank' rel='noopener' class={detailExternalLink}>
                <span>Visit Site</span>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' class={detailExternalIcon}>
                  <path d='M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z' />
                </svg>
              </a>
            </div>
          </header>
          {/* <div class={taxonomy}>
            <div class={taxonomyTitle}>Roles</div>
            <ul class={taxonomyList}>
              {this.getRoles()}
            </ul>
          </div>
          <div class={taxonomy}>
            <div class={taxonomyTitle}>Tech</div>
            <ul class={taxonomyList}>
              {this.getTech()}
            </ul>
          </div>
          <p>{this.project.description}</p> */}
        </div>
      </DefaultLayout>
    )
  }
}
