"use client";
import { bot } from "../small/avatar";
import { useGlobalContext } from "@/utils/Context/user";
import { avatar } from "@/utils/types";

function ProfileHeader() {
  const { data, setData } = useGlobalContext();

  return (
    <header className="">
      <div
        className="w-full h-[28rem] bg-no-repeat bg-center bg-cover relative rounded-3xl"
        style={{
          backgroundImage: `url(${bot.banner})`,
        }}
      >
        <div className="absolute bottom-0 flex w-full items-end">
          <div className="w-full h-10 bg-black rounded-lg"></div>
          <div className="border-b-black absolute left-[5%] -top-[125%]">
            <img
              className="rounded-full border-4 border-black top-5 w-32 h-32"
              src={data?.avatar}
              alt=""
            />
          </div>
          <div className="absolute right-[5%] h-12 bg-redditBG"></div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
