import apiInstance from "@/app/axiosInstance";

const getPost = async () => {
  try {
    const res = await apiInstance.get("/community/getfeedpost");
    return res;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const createPost = async (payload: any) => {
  try {
    const res = await apiInstance.post("/community/createpost", payload);
    return res;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const updatePost = async (payload: any) => {
  try {
    const res = await apiInstance.patch("/community/updatepost", payload);
    return res;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const deletePost = async (payload: any) => {
  try {
    const res = await apiInstance.delete("/community/deletepost", {
      data: payload,
    });
    return res;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const getStories = async () => {
  try {
    const res = await apiInstance.get("/story/getstory");
    return res?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};
const CommunityService = {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getStories,
};
export default CommunityService;
