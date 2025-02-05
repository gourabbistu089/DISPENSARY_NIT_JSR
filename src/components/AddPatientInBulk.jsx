import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddPatientInBulk = () => {
  const [file, setFile] = useState(null);

  const fileSubmitHandler = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    let formData = new FormData();
    formData.append('list', file);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}api/v1/user/bulk`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (res.status === 200) {
        toast.success("Patient list uploaded");
        console.log('Success:', res.data);
      } else {
        toast.error("Error uploading file");
        console.log('Error:', res.data);
      }
    } catch (error) {
      toast.error("Error uploading file");
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form>
        <div className="mb-2">
          <label htmlFor="csvFile" className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold mb-2">Upload CSV File</label>
          <input type="file" id="csvFile" name="csvFile" accept=".csv" className="w-full p-2 border text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg border-gray-300 rounded" onChange={(e) => setFile(e.target.files[0])} required />
        </div>
        <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600" onClick={fileSubmitHandler}>Upload</button>
      </form>
    </div>
  );
};

export default AddPatientInBulk;