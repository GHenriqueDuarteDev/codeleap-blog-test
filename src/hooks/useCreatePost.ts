import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";

interface CreatePostData {
  username: string;
  title: string;
  content: string;
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreatePostData) => {
      const response = await api.post("", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
