import { Header } from '../contents/Header'
import { Footer } from '../contents/Footer'
import { Wrapper } from '../contents/Wrapper'
import { Link } from 'react-router-dom'
import HomePhoto from "../../../assets/images/home-photo.png";
import { Button } from '../blocks/Button';
import { Image } from '../blocks/Image';


export const HomeContent = () => {
  return (
    <Wrapper blur>
      <Header />
      <Image src={HomePhoto} alt='home photo' />
      <Link to={'/plans'}>Plans</Link>
      <Button>Hola</Button>
      <Footer />
    </Wrapper>
  )
}
