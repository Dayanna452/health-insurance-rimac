import { usePlansData } from "../services/plans";
import { PlansLayout } from "../presentation/components/layouts/PlansLayout";

const Plans = () => {
  const {data} = usePlansData();
  console.log('plans', data);
  return <PlansLayout />;
};

export default Plans;
