import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../api";
import toast from "react-hot-toast";

export const registerNewAdmin = async (formData,setErrorMessage,setSuccessMessage,setFormData) => {
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
          error.response?.data?.message || "There was an error registering the admin."
        );
      }
}