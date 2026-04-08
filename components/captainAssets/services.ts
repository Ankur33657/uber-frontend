import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/common/constant";
import { StaleTime } from "@/common/constant";
import authServices from "@/services/auth.services";
export const useGetCaptainStatus=()=>{
    return useQuery({
        queryKey: [QueryKey?.CAPTAIN_STATUS],
        queryFn: async () => {
            const res = await authServices?.getCaptainStatus();
            return res;
        },
        staleTime:StaleTime?.STALETIME
    })
}