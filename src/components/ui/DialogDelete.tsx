import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Loader2 } from "lucide-react";
import trashIcon from "../../assets/trash-icon.svg";
import { Button } from "./Button";
import { useUserStore } from "../../store/useUserStore";
import { useDeletePost } from "../../hooks/useDeletePost";

interface DialogDeleteProps {
  postId: number;
  postUserName: string;
}

export function DialogDelete({ postId, postUserName }: DialogDeleteProps) {
  const { username } = useUserStore();
  const isMyPost = username === postUserName;
  const { mutate: deletePost, isPending } = useDeletePost();

  const [isOpen, setIsOpen] = useState(false);

  if (!isMyPost) {
    return null;
  }

  function handleDelete() {
    deletePost(postId, {
      onSuccess: () => {
        setIsOpen(false);
      },
    });
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="cursor-pointer bg-transparent border-none p-1">
          <img src={trashIcon} alt="Delete" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />

        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl focus:outline-none"
        >
          <Dialog.Title className="text-[22px] font-bold text-black">
            Are you sure you want to delete this item?
          </Dialog.Title>

          <div className="mt-8 flex justify-end gap-4">
            <Dialog.Close asChild>
              <Button
                disabled={isPending}
                className="cursor-pointer rounded-lg border border-[#999999] bg-white px-6 py-1 font-bold text-black hover:bg-gray-100 disabled:opacity-50"
              >
                Cancel
              </Button>
            </Dialog.Close>

            <Button
              onClick={handleDelete}
              disabled={isPending}
              className="flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-[#FF5151] px-6 py-1 font-bold text-white hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed min-w-30"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
