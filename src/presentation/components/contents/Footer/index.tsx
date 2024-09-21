import { FC } from 'react'

import LogoWhite from '../../../../assets/images/rimac-black-white.svg'

import './styles/footer.scss'
import { Image } from '../../blocks/Image'

export const Footer: FC = () => {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <Image src={LogoWhite} alt='footer logo' />
      </div>
      <p className='footer__copyright'>© 2023 RIMAC Seguros y Reaseguros.</p>
    </div>
  )
}
