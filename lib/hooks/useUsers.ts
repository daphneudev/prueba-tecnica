"use client";

import { useQuery } from "@tanstack/react-query";
import { REQRES_ENDPOINTS, usersService } from "@/app/helpers/axios-instance";

export function useUsers(page: number) {
  return useQuery({
    queryKey: ["users", page],
    queryFn: async () => {
      const response = await usersService.get(
        `${REQRES_ENDPOINTS.users}?page=${page}`
      );
      return response.data;
    },
  });
}
