import apiInstance from "@/app/axiosInstance";


const getWeeklyRecord = async () => {
    try {
        const res = await apiInstance.get("/ride/getweeklyrecord");
        return res?.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(errorMessage);
      throw errorMessage;
    }
}

const CaptainServices = { getWeeklyRecord };
export default CaptainServices;
