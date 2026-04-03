import apiInstance from "@/app/axiosInstance";

const userActivity = async () => {
  try {
    const res = await apiInstance.get(`/ride/previousride`);
    return res?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const findingRoutes = async (coordinate: string) => {
  try {
    const res = await apiInstance.get("/ride/findalternatepath", {
      params: { coordinate: coordinate },
    });
    return res?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const calculatingPriceForDrive = async (payload: any) => {
  try {
    const res = await apiInstance.post("/ride/calculatingprice", payload);
    return res?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const findingCaptain = async () => {
  try {
    const res = await apiInstance.post("/ride/findcaptain");
    return res?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const UserService = {
  userActivity,
  findingRoutes,
  calculatingPriceForDrive,
  findingCaptain,
};
export default UserService;
