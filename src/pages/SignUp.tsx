import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useUserStore } from "../store/useUserStore";

export function SignUp() {
  const [userNameInput, setUserNameInput] = useState("");
  const { setUsername } = useUserStore();
  const navigate = useNavigate();

  const isButtonDisabled = userNameInput.trim() === "";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isButtonDisabled) return;

    setUsername(userNameInput);

    navigate("/feed");
  }

  return (
    <main className="flex min-h-svh w-full bg-[#DDDDDD]">
      <div className="border flex flex-col gap-3 my-auto mx-auto bg-white border-gray-100 rounded-2xl p-4 w-full max-w-[500px]">
        <h1 className="text-[22px] font-bold">Welcome to CodeLeap network!</h1>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[16px]">Please enter your username</label>
            <Input
              placeholder="John doe"
              value={userNameInput}
              onChange={(e) => setUserNameInput(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Button
              className="px-6 py-1 uppercase text-white bg-[#7695EC]"
              type="submit"
              disabled={isButtonDisabled}
            >
              enter
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
