import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBlogCategory = async () => {
  const response = await axios.get(`${base_url}blog-category/`);
  return response.data;
};

const createBlogCategory = async (blog) => {
  const response = await axios.post(`${base_url}blog-category/`, blog, config);
  return response.data;
}

const bCategoryService = {
  getBlogCategory,
  createBlogCategory,
};

export default bCategoryService;
