import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
  const data = await response.json();
  return data;
};

export const useUserData = () => {
  return useQuery('userData', fetchData);
};