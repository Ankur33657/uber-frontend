import apiInstance from "@/app/axiosInstance";
import { LoginRequest } from "@/common/types/logintypes";
const userLogin = async (data: LoginRequest) => {
  try {
    const response = await apiInstance.post("/user/login", data);
    return response;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const userSignUp = async (payload: any) => {
  try {
    const response = await apiInstance.post("/user/signup", payload);
    return response;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};
const authServices = { userLogin, userSignUp };
export default authServices;
