import { Header } from '../contents/Header'
import { Footer } from '../contents/Footer'
import { Wrapper } from '../contents/Wrapper'
import { Link } from 'react-router-dom'
import HomePhoto from '../../../assets/images/home-photo.png'
import { Button } from '../blocks/Button'
import { Image } from '../blocks/Image'
import { Badge } from '../blocks/Badge'

export const HomeContent = () => {
  return (
    <Wrapper blur>
      <Header />
      <div className='home__content'>
        <div className=''>
          <Badge className='badge_gradient' text='Seguro Salud Flexible' />
          <h2>Creado para ti y tu familia</h2>
        </div>
        <Image src={HomePhoto} alt='home photo' width={100} />
      </div>
      <Link to={'/plans'}>Plans</Link>
      <Button>Hola</Button>
      <Footer />
    </Wrapper>
  )
}
