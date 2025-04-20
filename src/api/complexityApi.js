import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/complexity';

export const getAllComplexities = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const saveComplexity = async (complexity) => {
  if (complexity.id) {
    return axios.put(`${BASE_URL}/${complexity.id}`, complexity);
  }
  return axios.post(BASE_URL, complexity);
};

export const deleteComplexity = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
