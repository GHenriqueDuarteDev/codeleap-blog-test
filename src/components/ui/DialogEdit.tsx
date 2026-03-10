import * as Dialog from "@radix-ui/react-dialog";
import editIcon from "../../assets/edit-icon.svg";
import { Button } from "./Button";
import { Input } from "./Input";

export function DialogEdit({ post }) {
  const isMyPost = true;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="cursor-pointer bg-transparent border-none p-1">
          <img src={editIcon} alt="Edit" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl focus:outline-none">
          <Dialog.Title className="text-[22px] font-bold text-black">Edit Item</Dialog.Title>

          <form className="flex flex-col my-4 gap-4">
            <fieldset className="flex items-center gap-5">
              <div className="flex w-full flex-col gap-1">
                <p className="text-[16px]">Title</p>
                <Input placeholder="Hello world" />
              </div>
            </fieldset>
            <fieldset className="flex items-center gap-5">
              <div className="flex w-full flex-col gap-1">
                <p className="text-[16px]">Content</p>
                <Input as="textarea" placeholder="Content here" />
              </div>
            </fieldset>
          </form>

          <div className="flex justify-end gap-3">
            <Dialog.Close asChild>
              <Button className="cursor-pointer rounded-lg border border-[#999999] bg-white px-6 py-1 font-bold text-black hover:bg-gray-100">
                Cancel
              </Button>
            </Dialog.Close>

            <Dialog.Close asChild>
              <Button className="cursor-pointer rounded-lg bg-[#47B960] px-6 py-1 font-bold text-white hover:bg-green-600">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
