
import { apiConnector } from "../apiConnector";

import { authEndpoints } from "../api";
import toast from "react-hot-toast";


export const signin = async ({ userId, password, userType, navigate}) => {

    try {
        // console.log(userId, password, userType);
        const response = await apiConnector(
          "POST",
          authEndpoints.LOGIN_API,
          {
            user_id: userId,
            password,
            user_type: userType,
          },
        );
  
        if (response.data.success) {
          const userData = {
            userType: response.data.userType,
            userId,
            token: response.data.token,
          };
          toast.success("Successfully logged in!");
          navigate(`/${response.data.userType}`);
          return userData;
        } else {
          toast.error(`Login failed: ${response.data.message}`);
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "An error occurred during login.";
        toast.error(`${errorMessage}`);
      }
}