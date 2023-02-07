import React from "react";
// import React, { useEffect } from "react";
// import CustomInput from "../components/CustomInput";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { createCoupon, resetState } from "../features/coupon/couponSlice";

// let schema = yup.object().shape({
//   title: yup.string().required("Coupon Name is Required"),
// });
const AddCoupon = () => {
  return <div>Add Coupon</div>;

  //   const dispatch = useDispatch();
  //   const newCoupon = useSelector((state) => state.coupon);
  //   const { isSuccess, isError, isLoading, createdCoupon } = newCoupon;
  //   useEffect(() => {
  //     if (isSuccess && createdCoupon) {
  //       toast.success("Coupon Added Successfully!");
  //     }
  //     if (isError) {
  //       toast.error("Something Went Wrong!");
  //     }
  //   }, [isSuccess, isError, isLoading, createdCoupon]);
  //   const formik = useFormik({
  //     initialValues: {
  //       title: "",
  //     },
  //     validationSchema: schema,
  //     onSubmit: (values) => {
  //       dispatch(createCoupon(values));
  //       formik.resetForm();
  //       setTimeout(() => {
  //         dispatch(resetState());
  //       }, 3000);
  //     },
  //   });
  //   return (
  //     <div>
  //       <h3 className="mb-4 title">Add Coupon</h3>
  //       <div>
  //         <form action="" onSubmit={formik.handleSubmit}>
  //           <CustomInput
  //             type="text"
  //             label="Enter Coupon"
  //             id="coupon"
  //             name="title"
  //             onChng={formik.handleChange("title")}
  //             onBlr={formik.handleBlur("title")}
  //             val={formik.values.title}
  //           />
  //           <div className="error">
  //             {formik.touched.title && formik.errors.title}
  //           </div>
  //           <button
  //             className="btn btn-success border-0 rounded-3 my-5"
  //             type="submit"
  //           >
  //             Add Coupon
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
};

export default AddCoupon;
