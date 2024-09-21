import './styles/wrapper.scss'
import LeftBlur from '../../../../assets/images/left-blur.svg'
import RightBlur from '../../../../assets/images/right-blur.svg'

interface WrapperProps {
  children: React.ReactNode
  blur?: boolean
}

export const Wrapper = ({ children, blur }: WrapperProps) => {
  return (
    <div className='wrapper-container'>
      {blur && <img className='left-blur' src={LeftBlur} alt='no hay blur' />}
      <div className='wrapper-container__content'>{children}</div>
      {blur && <img className='right-blur' src={RightBlur} alt='no hay blur' />}
    </div>
  )
}
