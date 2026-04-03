import apiInstance from "@/app/axiosInstance";
import { StaleTime } from "@/common/constant";
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

const createStory = async (payload: any) => {
  try {
    const res = await apiInstance.post("/story/createstory", payload);
    return res?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.log(errorMessage);
    throw errorMessage;
  }
};

const getLastMonthNews = async () => {
  try {
    const cachedData = localStorage.getItem("news");
    const news = cachedData ? JSON.parse(cachedData) : null;
    if (!news || Date.now() > news.expiredAt) {
      console.log("Cache expired or missing. Fetching from API...");
      const res = await apiInstance.get("/story/getalllastmonthnews");
      const dataToCache = {
        articles: res.data?.data?.articles?.results,
        expiredAt: Date.now() + StaleTime?.NEWS_EXPIRE,
      };
      localStorage.setItem("news", JSON.stringify(dataToCache));
      return dataToCache.articles;
    }

    console.log("Serving news from LocalStorage cache");
    return news?.articles;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("News Service Error:", errorMessage);
    throw errorMessage;
  }
};
const CommunityService = {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getStories,
  createStory,
  getLastMonthNews,
};
export default CommunityService;
