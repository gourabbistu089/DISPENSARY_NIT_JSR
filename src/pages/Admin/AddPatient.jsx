import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AddPatientInBulk from "../../components/AddPatientInBulk";
import AddPatientSingle from "../../components/AddPatientSingle";


const AddPatient = () => {
  const [exist , setIsExist] = useState("");
    const handleTypeChange = (e) => {
      const type = e.target.value;
      setIsExist(type);
    }
  return (
  <>
      <div className="container">
      <div className="mb-4">
            <label
              htmlFor="Patient"
              className="block text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2"
            >
              Patient Details
            </label>
            <select
              id="medicineType"
              value={exist}
              onChange={handleTypeChange}
              className="w-full p-2 border border-gray-300 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2 rounded"
            >
              <option value="">Select Patient Type</option>
              <option value="exist">Student details file</option>
              <option value="notexist">Single details</option>
            </select>
          </div>
      </div>
    {exist == "exist" && <AddPatientInBulk/> }
    {exist == "notexist" && <AddPatientSingle/>}
  </>  
  );
};

export default AddPatient;