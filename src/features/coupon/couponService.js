import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getCoupon = async () => {
  const response = await axios.get(`${base_url}coupon/`, config);
  return response.data;
};

const couponService = {
  getCoupon,
};

export default couponService;
