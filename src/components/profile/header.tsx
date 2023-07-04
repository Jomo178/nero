"use client";
import { bot } from "../small/avatar";
import { useGlobalContext } from "@/utils/Context/user";

function ProfileHeader() {
  const { data, setData } = useGlobalContext();

  return (
    <header className="mt-6">
      <div
        className="w-full h-[28rem] bg-no-repeat bg-center bg-contain relative rounded-3xl"
        style={{
          backgroundImage: `url(${bot.banner})`,
        }}
      >
        <div className="absolute bottom-0 flex w-full items-end">
          <div className="w-full h-10 bg-black rounded-lg"></div>
          <div className="border-b-black absolute left-[5%] -top-[125%]">
            <img
              className="rounded-full border-4 border-black top-5 w-32 h-32"
              src={data.user?.avatar}
              alt=""
            />
          </div>
          <div className="absolute right-[5%] h-10 bg-redditBG flex gap-2 items-center">
            <img
              className="h-8 w-8 cursor-pointer"
              src="https://static.vecteezy.com/ti/gratis-vektor/p3/12867039-beta-tester-icon-stil-kostenlos-vektor.jpg"
              alt=""
              title="Beta Tester"
            />
            <img
              className="h-8 w-8 cursor-pointer"
              src="https://static.vecteezy.com/ti/gratis-vektor/p3/12867039-beta-tester-icon-stil-kostenlos-vektor.jpg"
              alt=""
              title="Beta Tester"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
