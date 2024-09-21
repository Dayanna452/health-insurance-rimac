import RimacLogo from '../../../../assets/images/rimac-logo.svg'

import './styles/header.scss'

import { Image } from '../../blocks/Image/index'

export const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <Image
        className='header-container__logo'
        src={RimacLogo}
        alt='rimac logo'
      />
      <div className='header-contact'>
        <h3 className='header-contact__info_optional'>¡Compra por este medio!</h3>
        <h3>(01) 411 6001</h3>
      </div>
    </div>
  )
}
