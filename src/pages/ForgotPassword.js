import React from "react";
import { CiMail } from "react-icons/ci";

const ForgotPassword = () => {
  return (
    <div className="section">
      <div className="form-box w-25">
        <form action="">
          <h3>Forgot Password</h3>
          <p>Please enter your register email to get reset password mail.</p>
          <div className="inputbox w-100">
            <CiMail className="react-icons" />
            <input type="password" id="email" required/>
            <label>Email Address</label>
          </div>
          <button type="submit">Send Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
