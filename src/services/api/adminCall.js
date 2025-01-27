import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../api";
import toast from "react-hot-toast";

// Retrieve the user object from localStorage
const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;
const token = user ? user.token : null;

export const registerNewAdmin = async (
  formData,
  setErrorMessage,
  setSuccessMessage,
  setFormData
) => {
  try {
    const response = await apiConnector("POST", authEndpoints.REGISTER_ADMIN, {
      name: formData.name,
      DOB: formData.dob,
      gender: formData.gender,
      user_id: formData.userId,
      user_type: formData.role,
      contact_no: formData.contactNo,
      email_id: formData.email,
      password: formData.password,
      dependents: [],
      prescriptions: [],
      vitals: {
        height: 180,
        weight: 75,
        body_temp: 36.6,
        bp: "120/80",
        spo2: 100,
      },
    });

    // console.log("Response:", response);
    if (response.data.success) {
      setSuccessMessage("");
      toast.success("Admin registered successfully!");
      // console.log("Admin registered successfully!");
      setFormData({
        role: "admin",
        name: "",
        dob: "",
        gender: "",
        userId: "",
        password: "",
        email: "",
        contactNo: "",
      });
    } else {
      setErrorMessage(`Failed to register admin: ${response.data.message}`);
    }
  } catch (error) {
    console.log(error);
    setErrorMessage(
      error.response?.data?.message ||
        "There was an error registering the admin."
    );
  }
};

export const addStaffAndDoctor = async (
  formData,
  setErrorMessage,
  setSuccessMessage,
  setFormData
) => {
  // Retrieve the user object from localStorage
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const token = user ? user.token : null;

  // Log the token for debugging
  // console.log("Retrieved token:", token);

  // Handle missing token
  if (!token) {
    toast.error("Token not found in local storage");
    setErrorMessage("Token is missing, please log in again.");
    return; // Exit the function early to avoid making the API call
  }

  try {
    const response = await apiConnector(
      "POST",
      authEndpoints.REGISTER_STAFF_AND_DOCTOR,
      {
        name: formData.name,
        DOB: formData.dob,
        gender: formData.gender,
        user_id: formData.userId,
        user_type: formData.role,
        contact_no: formData.contactNo,
        email_id: formData.email,
        password: formData.password,
        dependents: [],
        prescriptions: [],
        vitals: {
          height: "",
          weight: "",
          body_temp: "",
          bp: "",
          spo2: "",
        },
      },
      {
        Authorization: token, // Correct Authorization header
      }
    );
    if (response.data.success) {
      toast.success(`${formData.role} registered successfully`);
      setSuccessMessage("");
      setFormData({
        role: "",
        name: "",
        dob: "",
        gender: "",
        userId: "",
        password: "",
        email: "",
        contactNo: "",
      });
    } else {
      setErrorMessage(`Failed to register user`);
      toast.error(`Failed to register user: ${response.data.message}`);
    }
  } catch (error) {
    console.log("Error while registering user:", error);
    toast.error(
      `${
        error.response?.data?.message ||
        "There was an error registering the user."
      }`
    );
    setErrorMessage(
      error.response?.data?.message ||
        "There was an error registering the user."
    );
  }
};
