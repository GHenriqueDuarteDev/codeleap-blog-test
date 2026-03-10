import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { DialogDelete } from "../components/ui/DialogDelete";
import { DialogEdit } from "../components/ui/DialogEdit";
import { usePosts } from "../hooks/usePosts";
import { useUserStore } from "../store/useUserStore";
import { useCreatePost } from "../hooks/useCreatePost";
import { useState } from "react";
import { formatRelativeTime } from "../utils/formatDate";

export function MainFeed() {
  const { data, isLoading, isError } = usePosts();
  const { username } = useUserStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate: createPost, isPending } = useCreatePost();

  const isSubmitDisabled = title.trim() === "" || content.trim() === "" || isPending;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitDisabled) return;

    createPost(
      {
        username,
        title,
        content,
      },
      {
        onSuccess: () => {
          setTitle("");
          setContent("");
        },
      }
    );
  }
  console.log(data);
  return (
    <div className="min-h-svh w-full flex flex-col items-center bg-[#DDDDDD]">
      <div className="max-w-200 w-full h-full bg-white">
        <div className="bg-[#7695EC] p-6">
          <h1 className="font-bold text-[22px] text-white">CodeLeap Network</h1>
        </div>
        <div className="gap-5 flex flex-col p-6">
          <Card>
            <div className="py-4 px-5 flex flex-col gap-4">
              <h1 className="font-bold">What’s on your mind?</h1>
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[16px]">Title</p>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Hello world"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px]">Content</p>
                  <Input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    as="textarea"
                    placeholder="Content here"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    disabled={isSubmitDisabled}
                    className="px-6 py-1 bg-[#7695EC] text-white"
                    type="submit"
                  >
                    {isPending ? "Creating..." : "Create"}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
          {isLoading && <p className="text-center text-gray-500">Loading posts...</p>}
          {isError && <p className="text-center text-red-500">Error fetching posts.</p>}
          {data?.results.map((post) => (
            <Card key={post.id}>
              <div className="flex items-center py-3 px-5 justify-between bg-[#7695EC]">
                <h1 className="font-bold text-[22px] text-white">{post.title}</h1>
                <div className="flex gap-4">
                  <DialogDelete postId={post.id} postUserName={post.username} />
                  <DialogEdit post={post} />
                </div>
              </div>
              <div className="px-5 py-3 font-normal text-[18px] text-[#777777] flex flex-col gap-2">
                <div className="flex justify-between">
                  <h2 className="font-bold">@{post.username}</h2>
                  <p>{formatRelativeTime(post.created_datetime)}</p>
                </div>
                <p className="text-black whitespace-pre-wrap wrap-break-word">{post.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
