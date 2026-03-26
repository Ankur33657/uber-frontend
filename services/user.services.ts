import apiInstance from "@/app/axiosInstance";

const userActivity = () => {
  try {
    const res = apiInstance.get(`/ride/previousride`);
    return res;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};
const UserService = { userActivity };
export default UserService;
