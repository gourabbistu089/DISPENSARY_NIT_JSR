import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { registerSinglePatient } from "../services/api/adminCall";
 


const AddPatientSingle = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    dob: "",
    gender: "",
    patientId: "",
    password: "1", 
    email: "@nitjsr.ac.in",
    contactNo: "",
    relation: "", 
    marital_status: "", 
    vitals: {
      height: "",
      weight: "",
      pulse: "",
      body_temp: "",
      bp: "",
      spo2: "",
      bloodgroup:"",
    },
  });

  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
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

  const handleVitalChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      vitals: {
        ...prevFormData.vitals,
        [name]: value,
      },
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerSinglePatient(formData, setErrorMessage, setSuccessMessage, setFormData);
  };

  return (
    <main className="font-medium  border rounded shadow p-2">
      <h2 className="text-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-2">
        ADD New Patient
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
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
              required
            >
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
              <option value="dependent">Dependent</option>
              <option value="student">Student</option>
            </select>
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
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
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
              htmlFor="patientId"
              className=" text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Patient ID:
            </label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z0-9-]/g, ''); // Remove special characters
              }}
              placeholder={
                formData.role === "dependent" 
                  ? "Enter Employee's ID (no special characters allowed)" 
                  : "Enter Patient ID (no special characters allowed)"
              } // Dynamic placeholder
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 text-uppercase rounded"
              required
              style={{ textTransform: 'uppercase' }}
            />
          </div>
          <div className="mb-2 relative">
            <label
              htmlFor="password"
              className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
              disabled
              />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  cursor-pointer text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
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

          {formData.role === "dependent" && (
            <>
            <div className="mb-2">
            <label htmlFor="marital_status" className="font-semibold mb-2">Relationship with Employee:</label>
            <select
              id="relation"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
              required
            >
              <option value="">Select</option>
              <option value="spouse">spouse</option>
              <option value="child">child</option>
              <option value="parent">parent</option>
            </select>
            </div>
          
              <div className="mb-2">
                <label htmlFor="marital_status" className="font-semibold mb-2">Marital Status:</label>
                <select
                  id="marital_status"
                  name="marital_status"
                  value={formData.marital_status}
                  onChange={handleChange}
                  className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  border-gray-300 rounded"
                  required
                >
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
            </>
          )}

        </div>

        
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full mt-8 mb-2 hover:bg-blue-950 cursor-pointer bg-blue-900 text-white p-2 rounded text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold"
          >
            Add {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddPatientSingle;
