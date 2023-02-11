import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
    password: yup.string().required("Pasword is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const authState = useSelector((state) => state);
  const { user, isLoading, isError, isSuccess, message } = authState.auth;
  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isLoading, isError, isSuccess, navigate]);

  return (
    <div>
      <section className="section">
        <div className="form-box">
          <div className="form-value">
            <form action="" onSubmit={formik.handleSubmit}>
              <div>
                <h3>Login</h3>
                <p>Login to your account to continue.</p>
                <div className="error">
                  {message.message === "Rejected" ? "You are not an admin" : ""}
                </div>
              </div>
              <div className="inputbox">
                <CiMail className="react-icons" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  autoComplete="off"
                  required
                />
                <label>Email</label>
                {
                  <div className="error">
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                }
              </div>

              <div className="inputbox">
                <RiLockPasswordLine className="react-icons" />
                <input
                  type="password"
                  name="password"
                  id="pass"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  required
                />
                <label>Password</label>
                {
                  <div className="error">
                    {formik.touched.password && formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div>
                }
              </div>

              <div className="forgot">
                <Link to="forgot-password">Forgot Password</Link>
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
