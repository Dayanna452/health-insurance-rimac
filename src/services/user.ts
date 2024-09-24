import { useQuery } from 'react-query';

export interface UserType {
  name: string;
  lastName: string;
  birthDay: string;
}

const fetchData = async () => {
  const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
  const data = await response.json();
  return data;
};

export const useUserData = () => {
  return useQuery<UserType>('userData', fetchData);
};