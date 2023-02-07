import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createProCat,
  getAProductCat,
  resetState,
  updateProductCat,
} from "../features/pcategory/pCategorySlice";
import { useLocation, useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  title: yup.string().required("Category is Required"),
});
const AddCat = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getprocatId = location.pathname.split("/")[3];
  const newProductCat = useSelector((state) => state.pCategory);
  const {
    isSuccess,
    isError,
    isLoading,
    CreatedproCategories,
    categoryName,
    updatedproCategories,
  } = newProductCat;
  useEffect(() => {
    if (getprocatId !== undefined) {
      dispatch(getAProductCat(getprocatId));
    } else {
      dispatch(resetState());
    }
  }, [getprocatId, dispatch]);
  useEffect(() => {
    if (isSuccess && CreatedproCategories) {
      toast.success("Category Added Successfully!");
    }
    if (updatedproCategories && isSuccess) {
      toast.success("Category Updated Successfully");
      navigate("/admin/category-list");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [
    isSuccess,
    isError,
    isLoading,
    CreatedproCategories,
    navigate,
    updatedproCategories,
  ]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getprocatId !== undefined) {
        const data = { id: getprocatId, procatData: values };
        dispatch(updateProductCat(data));
      } else {
        dispatch(createProCat(values));
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
        {getprocatId !== undefined ? "Edit " : "Added "}
        Category
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Product Category"
            id="pCategory"
            name="title"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getprocatId !== undefined ? "Edit " : "Added "} Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCat;
