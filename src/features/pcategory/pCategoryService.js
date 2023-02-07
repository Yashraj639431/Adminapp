import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getProductCat = async () => {
  const response = await axios.get(`${base_url}category/`);
  return response.data;
};
const createProCat = async (prodcat) => {
  const response = await axios.post(`${base_url}category/`, prodcat, config);
  return response.data;
};
const updateProCat = async (category) => {
  const response = await axios.put(
    `${base_url}category/${category.id}`,
    { title: category.procatData.title },
    config
  );
  return response.data;
};
const getAProCat = async (id) => {
  const response = await axios.get(`${base_url}category/${id}`, config);
  return response.data;
};
const deleteProCat = async (id) => {
  const response = await axios.delete(`${base_url}category/${id}`, config);
  return response.data;
};
const pCatService = {
  getProductCat,
  createProCat,
  updateProCat,
  getAProCat,
  deleteProCat,
};
export default pCatService;
