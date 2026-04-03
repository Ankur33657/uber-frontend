import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/common/constant";
import UserService from "@/services/user.services";
import { StaleTime } from "@/common/constant";
export const useActivityQuery = () => {
  return useQuery({
    queryKey: [QueryKey?.ACTIVITY],
    queryFn: async () => {
      const res = await UserService?.userActivity();
      return res?.data;
    },
    staleTime: StaleTime?.STALETIME,
  });
};
