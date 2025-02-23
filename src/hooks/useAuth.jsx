import { getUserProfileDataApi } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export const useGetUserData = () =>
  useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfileDataApi,
    retry: false,
  });

  