import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getCategories = async () => {
  const res = await axios.get(`${API_URL}/categories`);
  return res.data;
};

export const getCards = async () => {
  const res = await axios.get(`${API_URL}/cards`);
  return res.data;
};

export const sendContactForm = async (data) => {
  const res = await axios.post(`${API_URL}/contact-form`, data);
  return res.data;
};
