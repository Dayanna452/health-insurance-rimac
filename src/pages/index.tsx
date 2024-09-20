import { Link } from "react-router-dom";
import { Button } from "../presentation/components/blocks/Button";

const Home = () => {
  return (
    <div>
      Home
      <Link to={"/plans"}>Plans</Link>
      <Button>Hola</Button>
    </div>
  );
};

export default Home;
