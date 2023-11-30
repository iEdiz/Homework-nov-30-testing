import axios from 'axios';

export const fetchData = async (): Promise<string> => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  return response.data;
};
