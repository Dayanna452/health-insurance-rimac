import { useQuery } from 'react-query';

const fetchPlans = async () => {
  const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
  const data = await response.json();
  return data;
};

export const usePlansData = () => {
  return useQuery('plansData', fetchPlans);
};