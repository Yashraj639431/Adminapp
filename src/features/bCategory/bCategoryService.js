import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

// Get all Blogs Category
const getBlogCategory = async () => {
  const response = await axios.get(`${base_url}blog-category/`);
  return response.data;
};

// Create a Blog Category
const createBlogCategory = async (blog) => {
  const response = await axios.post(`${base_url}blog-category/`, blog, config);
  return response.data;
};

// Get a Blog Category
const getABlogCategory = async (id) => {
  const response = await axios.get(`${base_url}blog-category/${id}`, config);
  return response.data;
};

// Update a Blog Category
const updateBlogCategory = async (bcategories) => {
  const response = await axios.put(
    `${base_url}blog-category/${bcategories.id}`,
    { title: bcategories.bCategoryData.title },
    config
  );
  return response.data;
};

// Delete a Blog Category
const deleteBlogCategory = async (id) => {
  const response = await axios.delete(`${base_url}blog-category/${id}`, config);
  return response.data;
};

const bCategoryService = {
  getBlogCategory,
  createBlogCategory,
  getABlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
};

export default bCategoryService;
