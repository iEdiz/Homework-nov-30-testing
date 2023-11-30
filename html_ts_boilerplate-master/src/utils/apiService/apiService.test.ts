import axios from 'axios';
import { fetchData } from './apiService';

jest.mock('axios');

const mockResponse = {
  data: {
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
  },
};

(axios.get as jest.Mock).mockImplementation(() => Promise.resolve(mockResponse));

it('should return correct data', () => fetchData().then((result) => {
  expect(result).toEqual(mockResponse.data);
}));
