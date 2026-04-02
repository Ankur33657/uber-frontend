import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/common/constant";
import CommunityService from "@/services/community.service";
import { StaleTime } from "@/common/constant";
import { NewsArticle } from "@/common/types/communitytypes";
export const useCommunityPostQuery = () => {
  return useQuery({
    queryKey: [QueryKey?.COMMUNITY_POST],
    queryFn: async () => {
      const res = await CommunityService?.getPost();
      return res;
    },
    staleTime: StaleTime?.STALETIME,
  });
};

export const useGetAllStories = () => {
  return useQuery({
    queryKey: [QueryKey?.COMMUNITY_STORIES],
    queryFn: async () => {
      const res = await CommunityService?.getStories();
      return res;
    },
    staleTime: StaleTime?.STALETIME,
  });
};

export const useGetLastMonthsNews = () => {
  return useQuery<{ trending: NewsArticle[]; latest: NewsArticle[] }>({
    queryKey: [QueryKey?.ALL_NEWS],
    queryFn: async () => {
      const res = await CommunityService?.getLastMonthNews();
      const trending = res?.slice(0, 7);
      const latest = res
        ?.slice(7)
        .sort(
          (a: any, b: any) =>
            new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
        );
      return { trending, latest };
    },
    staleTime: StaleTime?.STALETIME,
  });
};
