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

const userLogout = async () => {
  try {
    localStorage.removeItem("user");
    await apiInstance.get("/user/logout");
    window.location.href = "/auth/userlogin";
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const CaptainLogin = async (payload: any) => {
  try {
    const res = await apiInstance.post("/captain/login", payload);
    return res?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const CaptainSignup = async (payload: any) => {
  try {
    const res = await apiInstance?.post("/captain/signup", payload);
    return res?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};
const authServices = {
  userLogin,
  userSignUp,
  userLogout,
  CaptainLogin,
  CaptainSignup,
};
export default authServices;
