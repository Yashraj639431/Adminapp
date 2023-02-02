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
const pCatService = {
  getProductCat,
  createProCat,
};
export default pCatService;
