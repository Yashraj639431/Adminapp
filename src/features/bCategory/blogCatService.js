import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBlogCat = async () => {
  const response = await axios.get(`${base_url}blog-category/`);
  return response.data;
};
const createBlogCat = async (blogcat) => {
  const response = await axios.post(`${base_url}blog-category/`, blogcat, config);
  return response.data;
};
const bCatService = {
  getBlogCat,
  createBlogCat,
};
export default bCatService;
