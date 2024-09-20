import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      Home
      <Link to={'/plans'} >Plans</Link>
    </div>
  )
}

export default Home
