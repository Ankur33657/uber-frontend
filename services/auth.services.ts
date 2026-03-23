import apiInstance from "@/app/axiosInstance";
import { LoginRequest } from "@/common/types/logintypes";
const userLogin = async (data: LoginRequest) => {
  try {
    const response = await apiInstance.post("/user/login", data);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    throw "Error in login";
  }
};
const authServices = { userLogin };
export default authServices;
