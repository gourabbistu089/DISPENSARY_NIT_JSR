import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../api";
import toast from "react-hot-toast";
import axios from "axios";

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

const handleFetchEmployeeInfo = async (
  formData,
  setFormData
) => {
   // Retrieve the user object from localStorage
const storedUser = localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null; // Add check here
const token = user ? user.token : null; // Fallback to `null` if user is not available

// Log token or handle if it’s missing
if (!token) {
toast.error("Token not found in local storage");
}
  try {
   
  // console.log("Sending token in Authorization header:", `Bearer ${token}`);

    const baseURL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '');
    const response = await axios.post(`${baseURL}/api/staff/getinformation`, {
      user_id: formData.patientId,
      user_type: "employee",
    },
    {
      headers: {
        Authorization: token, // add the token to the Authorization header
      },
    });

    
    if (response.data.success) {
      const employeeId = response.data.data._id;
  // console.log("Sending token in Authorization header:", `Bearer ${token}`);

      // Call the route to add a dependent
      const baseURL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '');
      const dependentResponse = await axios.post(
        `${baseURL}/api/user/${employeeId}/dependents`,
        {
          name: formData.name,
          DOB: formData.dob,
          gender: formData.gender,
          relation: formData.relation,
          marital_status: formData.marital_status,
          contact_no: formData.contactNo,
          email_id: formData.email,
          vitals: {
            height: formData.vitals.height,
            weight: formData.vitals.weight,
            pulse: formData.vitals.pulse,
            body_temp: formData.vitals.body_temp,
            bp: formData.vitals.bp,
            spo2: formData.vitals.spo2,
            bloodgroup: formData.vitals.bloodgroup,
          },
        },
        {
          headers: {
            Authorization: token, // add the token to the Authorization header
          },
        }
      );
      // Log the dependent response to debug
      // console.log('Dependent API response:', dependentResponse.data);
      if (dependentResponse.data.success) {
        toast.success("Dependent added successfully!");
        setFormData({
          ...formData,
          name: "",
          dob: "",
          gender: "",
          contactNo: "",
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
      } else {
        // Log the error response to understand the cause
      // console.error('Failed to add dependent:', dependentResponse.data);
        toast.error(
          `Failed to add dependent: ${dependentResponse.data.message}`
        );
      }
    } else {
      toast.error("Employee not found");
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Error fetching employee information."
    );
  }
};

export const registerSinglePatient = async (
  formData,
  setErrorMessage,
  setSuccessMessage,
  setFormData
)=>{
  if (formData.role === "dependent") {
    console.log("Im dependent")
    handleFetchEmployeeInfo(formData, setFormData ); // Call to add dependent if role is "dependent"
    return; 
  }
  try {
    const response = await apiConnector("POST", authEndpoints.REGISTER_PATIENT, [{
      name: formData.name,
      DOB: formData.dob,
      gender: formData.gender,
      user_id: formData.patientId, 
      user_type: formData.role, 
      contact_no: formData.contactNo,
      email_id: formData.email,
      password: formData.password,
      dependents: [],
      prescriptions: [],
      vitals: {
        height: formData.vitals.height,
        weight: formData.vitals.weight,
        body_temp: formData.vitals.body_temp,
        bp: formData.vitals.bp,
        spo2: formData.vitals.spo2,
        bloodgroup: formData.vitals.bloodgroup,
      },
      }],
      {
        Authorization: token, // Correct Authorization header
      }
    )

    if (response.data.success) {
      setSuccessMessage("");
      toast.success("Patient registered successfully!");
      setFormData({
        role: "",
        name: "",
        dob: "",
        gender: "",
        patientId: "",
        password: "1", // Reset to default password
        email: "",
        contactNo: "",
        vitals: {
          height: "",
          pulse: "",
          weight: "",
          body_temp: "",
          bp: "",
          spo2: "",
          bloodgroup:"",
        },
      });
    } else {
      toast.error(`Failed to register patient: ${response.data.message}`);
    }
  } catch (error) {
    console.log(error);
    toast.error(
      error.response?.data?.message || "There was an error registering the patient."
    );
  }
}
