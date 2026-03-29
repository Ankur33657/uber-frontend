import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/common/constant";
import CommunityService from "@/services/community.service";
import { StaleTime } from "@/common/constant";
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
