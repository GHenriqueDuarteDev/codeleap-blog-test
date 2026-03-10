import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";

import editIcon from "../../assets/edit-icon.svg";
import { Button } from "./Button";
import { Input } from "./Input";
import { useUserStore } from "../../store/useUserStore";
import { useEditPost } from "../../hooks/useEditPost";

interface DialogEditProps {
  post: {
    id: number;
    username: string;
    title: string;
    content: string;
  };
}

export function DialogEdit({ post }: DialogEditProps) {
  const { username } = useUserStore();
  const isMyPost = username === post.username;

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const { mutate: editPost, isPending } = useEditPost();

  if (!isMyPost) return null;

  const isSubmitDisabled = title.trim() === "" || content.trim() === "" || isPending;

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitDisabled) return;

    editPost(
      { id: post.id, title, content },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      }
    );
  }

  function handleOpenChange(open: boolean) {
    setIsOpen(open);
    if (!open) {
      setTitle(post.title);
      setContent(post.content);
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button className="cursor-pointer bg-transparent border-none p-1">
          <img src={editIcon} alt="Edit" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />

        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl focus:outline-none"
        >
          <Dialog.Title className="text-[22px] font-bold text-black mb-6">Edit item</Dialog.Title>

          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[16px]">Title</p>
              <Input
                placeholder="Hello world"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[16px]">Content</p>
              <Input
                as="textarea"
                placeholder="Content here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={3}
              />
            </div>

            <div className="mt-4 flex justify-end gap-4">
              <Dialog.Close asChild>
                <Button
                  type="button"
                  disabled={isPending}
                  className="cursor-pointer rounded-lg border border-[#999999] bg-white px-6 py-1 font-bold text-black hover:bg-gray-100 disabled:opacity-50"
                >
                  Cancel
                </Button>
              </Dialog.Close>

              <Button
                type="submit"
                disabled={isSubmitDisabled}
                className="flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-[#47B960] px-6 py-1 font-bold text-white hover:bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed min-w-25"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
