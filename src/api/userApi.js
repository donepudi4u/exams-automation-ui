import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getAllUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const saveUser = async (user) => {
  if (user.id) {
    return axios.put(`${API_URL}/${user.id}`, user);
  } else {
    return axios.post(API_URL, user);
  }
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
