import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postId: number) => {
      await api.delete(`${postId}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
