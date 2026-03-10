import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { type IApiResponse } from "../types";

async function fetchPosts() {
  const response = await api.get<IApiResponse>("");
  return response.data;
}

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}
