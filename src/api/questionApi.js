import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/questions';

export const getQuestionsByUser = async (userId) => {
  return axios.get(`${BASE_URL}/by-user/${userId}`);
};

export const getAllQuestions = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const saveQuestion = async (question) => {
  return axios.post(BASE_URL, question);
};

export const deleteQuestion = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export const getSimilarQuestions = async (text) => {
  const res = await axios.get(`${BASE_URL}/search?q=${encodeURIComponent(text)}`);
  return res.data;
};
