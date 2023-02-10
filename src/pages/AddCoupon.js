import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createCoupons,
  getACoupons,
  updateCoupons,
  resetState,
} from "../features/coupon/couponSlice";
import { useLocation, useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  name: yup.string().required("Coupon Name is Required"),
  expiry: yup.date().required("Expiry Date is Required"),
  discount: yup.number().required("Discount Percentage is Required"),
});
const AddCoupon = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const getCouponId = location.pathname.split("/")[3];
  const newCoupon = useSelector((state) => state.coupon);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    updatedCoupon,
    // couponName,
  } = newCoupon;

  useEffect(() => {
    if (getCouponId !== undefined) {
      dispatch(getACoupons(getCouponId));
    } else {
      dispatch(resetState());
    }
  }, [getCouponId, dispatch]);

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfully!");
    }
    if (updatedCoupon && isSuccess) {
      toast.success("Coupon Updated Successfully");
      navigate("/admin/coupon-list");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdCoupon, updatedCoupon, navigate]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      expiry:  "",
      discount: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getCouponId !== undefined) {
        const data = { id: getCouponId, brandData: values };
        dispatch(updateCoupons(data));
      } else {
        dispatch(createCoupons(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {" "}
        {getCouponId !== undefined ? "Edit " : "Added "}
        Coupon
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Coupon Name"
            id="name"
            name="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="date"
            label="Enter Expiry Date"
            id="coupon"
            name="date"
            onChng={formik.handleChange("expiry")}
            onBlr={formik.handleBlur("expiry")}
            val={formik.values.expiry}
          />
          <div className="error">
            {formik.touched.expiry && formik.errors.expiry}
          </div>
          <CustomInput
            type="number"
            label="Enter Discount"
            id="discount"
            name="discount"
            onChng={formik.handleChange("discount")}
            onBlr={formik.handleBlur("discount")}
            val={formik.values.discount}
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getCouponId !== undefined ? "Edit " : "Added "}
            Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
