import axios from "axios";
import { base_url } from "../../utils/base_url";

const getBlogCategory = async () => {
  const response = await axios.get(`${base_url}blog-category/`);
  return response.data;
};

const bCategoryService = {
  getBlogCategory,
};

export default bCategoryService;
