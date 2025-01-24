import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signin } from "../../services/api/authCall";

const Login = ({ setForgotPassword }) => {
  const [userType, setUserType] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await signin({ userId, password, userType, navigate });
    // console.log("User Data:", userData);
    if (userData != null) {
      login(userData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto border rounded shadow p-4"
    >
      <h2 className="text-2xl mb-3 text-center">Login</h2>

      <div className="mb-4">
        <label htmlFor="userType" className="block mb-2">
          User Type:
        </label>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select User Type</option>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      <div className="mb-4 relative">
        <label htmlFor="userId" className="block mb-2">
          User ID:
        </label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">
          Password:
        </label>
        <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        </div>
       
        <div className="flex justify-end mt-2">
        <button
          type="button"
          className="mr-2 text-blue-700 text-sm hover:underline font-bold"
          onClick={() => setForgotPassword(true)}
        >
          Forgot Password?
        </button>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-800 text-white py-2 mt-4 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;

