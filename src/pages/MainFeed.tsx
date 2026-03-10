import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import trashIcon from "../assets/trash-icon.svg";
import editIcon from "../assets/edit-icon.svg";
import { Input } from "../components/ui/Input";

export function MainFeed() {
  return (
    <div className="h-svh w-full flex flex-col items-center bg-[#DDDDDD]">
      <div className="max-w-200 w-full h-full bg-white">
        <div className="bg-[#7695EC] p-6">
          <h1 className="font-bold text-[22px] text-white">CodeLeap Network</h1>
        </div>
        <div className="gap-5 flex flex-col p-6">
          <Card>
            <div className="py-4 px-5 flex flex-col gap-4">
              <h1 className="font-bold">What’s on your mind?</h1>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[16px]">Title</p>
                  <Input placeholder="Hello world" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px]">Content</p>
                  <Input as="textarea" placeholder="Content here" />
                </div>

                <div className="flex justify-end">
                  <Button className="px-6 py-1" type="submit">
                    Create
                  </Button>
                </div>
              </form>
            </div>
          </Card>
          <Card>
            <div className="flex items-center py-3 px-5 justify-between bg-[#7695EC]">
              <h1 className="font-bold text-[22px] text-white">title</h1>
              <div className="flex gap-5">
                <Button>
                  <img src={trashIcon} alt="Delete" />
                </Button>
                <Button>
                  <img src={editIcon} alt="Edit" />
                </Button>
              </div>
            </div>
            <div className="px-5 py-3 font-normal text-[18px] text-[#777777] flex flex-col gap-2">
              <div className="flex justify-between">
                <h2 className="font-bold">@user</h2>
                <p>post time</p>
              </div>
              <p className="text-black whitespace-break-spaces">
                Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit
                scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed
                cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
