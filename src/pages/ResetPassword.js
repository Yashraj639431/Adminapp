import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
const ResetPassword = () => {
  return (
    <div className="section">
      <div className="form-box">
        <form action="">
          <h3>Reset Password</h3>
          <p>Please enter your new password</p>
          <div className="inputbox">
            <RiLockPasswordLine className="react-icons" />

            <input type="password" id="pass" required />
            <label>New Password</label>
          </div>
          <div className="inputbox">
            <RiLockPasswordLine className="react-icons" />

            <input type="password" id="confpass" required />
            <label>Confirm Password</label>
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
