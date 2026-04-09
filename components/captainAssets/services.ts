import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/common/constant";
import { StaleTime } from "@/common/constant";
import authServices from "@/services/auth.services";
import { WeeklyReportItems } from "./type";
import CaptainServices from "@/services/captain.services";
export const useGetCaptainStatus = () => {
  return useQuery({
    queryKey: [QueryKey?.CAPTAIN_STATUS],
    queryFn: async () => {
      const res = await authServices?.getCaptainStatus();
      return res?.data;
    },
    staleTime: StaleTime?.STALETIME,
  });
};

export const useGetCaptainWeeklyReport = () => {
  return useQuery<WeeklyReportItems>({
    queryKey: [QueryKey?.CAPTAIN_WEEKLY_RECORD],
    queryFn: async () => {
      const res = await CaptainServices?.getWeeklyRecord();
      return res?.data;
    },
    staleTime: StaleTime?.STALETIME,
  });
};