import { h, Component } from 'preact'
import { css } from 'preact-emotion'
import DefaultLayout from '../../layout/default'
import editorial from '../../style/editorial'


export default class Home extends Component {
  render () {
    return (
      <DefaultLayout>
        <div class={css(editorial)}>
          <p>
            Bacon ipsum dolor amet tongue landjaeger strip steak ground round leberkas flank tail pork alcatra. Filet mignon picanha kielbasa, pig bresaola andouille capicola flank t-bone hamburger prosciutto biltong fatback. Chuck picanha beef ribs capicola, pastrami burgdoggen pancetta drumstick tail flank. Turkey ball tip pork loin flank, pastrami jerky biltong fatback pancetta kevin tongue tri-tip beef ribs. Pork belly ham hock sirloin chicken, turkey drumstick prosciutto pig pork loin.
          </p>
          <p>
            Ribeye turkey pork belly bacon pork chop chuck. Landjaeger frankfurter doner drumstick. Ball tip bresaola bacon, short ribs pig chicken filet mignon ham rump beef ribs tongue. Ground round hamburger flank strip steak shankle drumstick. Pig landjaeger jowl meatloaf ground round chuck hamburger cow ball tip. Venison ham kielbasa, bacon beef ball tip pork belly beef ribs jerky sausage. Sausage boudin salami alcatra.
            </p>
          <p>
            Shankle landjaeger cupim filet mignon. Turkey corned beef pork belly cow salami landjaeger. Pork chop kevin bresaola brisket. Pork chop ball tip tri-tip, frankfurter kielbasa cow bresaola strip steak tenderloin hamburger. Ribeye kielbasa chicken shank pork loin prosciutto salami leberkas cow corned beef kevin meatloaf frankfurter flank. Pork loin rump doner tri-tip boudin jerky capicola sirloin alcatra meatloaf kielbasa. Prosciutto fatback meatloaf flank cupim, doner cow tail meatball burgdoggen swine ball tip.
          </p>
        </div>
      </DefaultLayout>
    )
  }
}
