import { bot } from "../small/avatar";

function ProfileHeader() {
  return (
    <header>
      <img
        className="object-cover w-full h-60 z-[75]"
        src={bot.banner}
        alt="Banner Image"
      />
      <div className="relative w-full">
        <div className="w-14 h-14 rounded-full bg-black absolute bottom-0 z-50 right-0"></div>
        <img
          className="rounded-full w-12 h-12 absolute bottom-0 z-[100] right-0"
          src={bot.imageUrl}
          alt=""
        />
      </div>
      {/* <div className="relative w-full h-200">
        <div className="w-full h-2 bg-black absolute bottom-0"></div>
        <img
          src={bot.imageUrl}
          alt="Image"
          className="rounded-full absolute bottom-0 right-0 "
        />
        <div className="w-18 h-2 bg-black absolute bottom-0"></div>
        <img
          className="object-cover w-full h-full"
          src={bot.banner}
          alt="Banner Image"
        />
      </div> */}
    </header>
  );
}

export default ProfileHeader;
