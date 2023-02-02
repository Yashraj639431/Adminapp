import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProductCat = async () => {
  const response = await axios.get(`${base_url}category/`);
  return response.data;
};
const pCatService = {
  getProductCat,
};
export default pCatService;
