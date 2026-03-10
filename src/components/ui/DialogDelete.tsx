import * as Dialog from "@radix-ui/react-dialog";
import trashIcon from "../../assets/trash-icon.svg";
import { Button } from "./Button";

export function DialogDelete({ post }) {
  const isMyPost = true;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="cursor-pointer bg-transparent border-none p-1">
          <img src={trashIcon} alt="Delete" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl focus:outline-none">
          <Dialog.Title className="text-[22px] font-bold text-black">
            Are you sure you want to delete this item?
          </Dialog.Title>

          <div className="mt-8 flex justify-end gap-4">
            <Dialog.Close asChild>
              <Button className="cursor-pointer rounded-lg border border-[#999999] bg-white px-6 py-1 font-bold text-black hover:bg-gray-100">
                Cancel
              </Button>
            </Dialog.Close>

            <Dialog.Close asChild>
              <Button className="cursor-pointer rounded-lg bg-[#FF5151] px-6 py-1 font-bold text-white hover:bg-red-600">
                Delete
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
