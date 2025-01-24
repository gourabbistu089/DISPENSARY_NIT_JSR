import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = ({ setForgotPassword }) => {
  const [userType, setUserType] = useState("");
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [countdown, setCountdown] = useState(0);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const otpRefs = useRef([]);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
  
  const handleSendOtp = async () => {
    try {
      // console.log(userId);
      const baseURL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, "");
      const response = await axios.post(`${baseURL}/api/auth/send-otp-email`, {
        userId,
        user_type:userType
      });
      // console.alog("response", response);
      toast.success("OTP sent to your email 😀");
      setCountdown(300);
    } catch (error) {
      console.log(error);
      toast.error("Error sending OTP ☹️");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, "");
      const response = await axios.post(`${baseURL}/api/auth/verify-otp`, {
        userId,
        otp: otp.join(""),
      });
      toast.success("OTP verified successfully 😀");
      setIsOtpVerified(true);
    } catch (error) {
      toast.error("Error verifying OTP ☹️");
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match ☹️");
      return;
    }
    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, "");
      const response = await axios.post(`${baseURL}/api/auth/reset-pass`, {
        userId,
        newPassword,
      });
      toast.success("Password reset successfully 😀");
      setForgotPassword(false);
    } catch (error) {
      toast.error("Error resetting password ☹️");
    }
  };

  return (
    <form className="max-w-md mx-auto border rounded shadow p-4">
      <h2 className="text-2xl mb-3 text-center">Forgot Password</h2>
      <div className="mb-4">
          <label
            htmlFor="userType"
            className="block text-xs sm:text-sm md:text-base lg:text-lg mb-2"
          >
            User Type:
          </label>
          <select
            id="userType"
            value={userType}
            onChange={(e)=> setUserType(e.target.value)}
            className="w-full p-2 border text-xs sm:text-sm md:text-base lg:text-lg border-gray-300 rounded"
            required
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
          </select>
        </div>
      <div className="mb-4">
        <label htmlFor="userId" className="block mb-2">
          User ID:
        </label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="button"
        className="w-full bg-blue-500 text-white py-2 mb-4 rounded"
        onClick={handleSendOtp}
        disabled={countdown > 0}
      >
        {countdown > 0 ? `Resend OTP in ${countdown} seconds` : "Send OTP"}
      </button>

      {!isOtpVerified ? (
        <>
          <div className="flex justify-between mb-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => {
                  const newOtp = [...otp];
                  newOtp[index] = e.target.value;
                  setOtp(newOtp);
                  if (e.target.value && index < otp.length - 1) {
                    otpRefs.current[index + 1].focus();
                  }
                }}
                ref={(el) => (otpRefs.current[index] = el)}
                className="w-12 p-2 text-center border rounded"
              />
            ))}
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded"
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>
        </>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2">
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmNewPassword" className="block mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </>
      )}

      <button
        type="button"
        className="w-full text-blue-500 text-sm mt-4"
        onClick={() => setForgotPassword(false)}
      >
        Back to Login
      </button>
    </form>
  );
};

export default ForgotPassword;
