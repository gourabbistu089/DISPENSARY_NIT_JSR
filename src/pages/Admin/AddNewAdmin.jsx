import React, { useState } from "react";
import { registerNewAdmin } from "../../services/api/adminCall";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AddNewAdmin = () => {
  const [formData, setFormData] = useState({
    role: "admin",
    name: "",
    dob: "",
    gender: "",
    userId: "",
    password: "",
    email: "",
    contactNo: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State to handle password visibility
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword); // Toggle password visibility
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerNewAdmin(formData, setErrorMessage, setSuccessMessage, setFormData);
  };

  return (
    <main className="font-medium  border rounded shadow p-2">
      <h2 className="text-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-2">
        ADD New Admin
      </h2>
      {errorMessage && (
        <div className="text-red-500 text-center mb-2">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="text-green-500 text-center mb-2">{successMessage}</div>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto font-medium w-4/5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-2">
            <label
              htmlFor="role"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Role:
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value="admin"
              readOnly
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="dob"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="gender"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-2">
            <label
              htmlFor="userId"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              User ID:
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              placeholder="Admin@admin"
              value={formData.userId}
              onChange={handleChange}
              className="w-full text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          {/* Password with Show/Hide Feature */}
          <div className="mb-2 relative">
            <label
              htmlFor="password"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash/> : <FaEye/>} {/* Toggle icon based on state */}
            </span>
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Username@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="contactNo"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Contact No.:
            </label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              placeholder="9140******"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className=" w-full mb-2 mt-8 bg-blue-900 text-white p-2 rounded text-xs sm:text-sm md:text-sm lg:text-md xl:text-lg font-semibold"
          >
            Add {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddNewAdmin;

