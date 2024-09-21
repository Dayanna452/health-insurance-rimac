//Components
import { useUserData } from "../services/user";
import { HomeContent } from "../presentation/components/layouts/HomeContent";

const Home = () => {
   const {data} = useUserData()
   console.log('data', data)
  return (
    <HomeContent/>
  );
};

export default Home;
