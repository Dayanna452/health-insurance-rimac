import { useQuery } from "react-query";

export interface PlanList {
  age: number;
  description: string[];
  name: string;
  price: number;
}

type PlansType = {
  list: PlanList[];
};

const fetchPlans = async () => {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/plans.json"
  );
  const data = await response.json();
  return data;
};

export const usePlansData = () => {
  return useQuery<PlansType>("plansData", fetchPlans);
};
