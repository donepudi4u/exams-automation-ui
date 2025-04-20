import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/subjects';

export const getAllSubjects = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const saveSubject = async (subject) => {
  if (subject.id) {
    return axios.put(`${BASE_URL}/${subject.id}`, subject);
  }
  return axios.post(BASE_URL, subject);
};

export const deleteSubject = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
