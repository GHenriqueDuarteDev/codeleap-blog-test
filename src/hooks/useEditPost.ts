import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";

interface EditPostData {
  id: number;
  title: string;
  content: string;
}

export function useEditPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, title, content }: EditPostData) => {
      const response = await api.patch(`${id}/`, { title, content });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
