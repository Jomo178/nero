import { ReactSVG } from "react-svg";
import { bot } from "../small/avatar";

function ProfileHeader() {
  const handleSVGInjection = (svg: any) => {
    svg.setAttribute("height", "120px");
    svg.setAttribute("width", "120px");
  };

  return (
    <header className="h-full">
      <div
        className="w-full h-[28rem] bg-no-repeat bg-center bg-cover object-cover relative"
        style={{
          backgroundImage: `url(${bot.banner})`,
        }}
      >
        <div className="absolute bottom-0 flex w-full items-end">
          <div className="w-full h-5 bg-black"></div>
          <div className="relative bottom-0 bg-black rounded-full">
            <img
              className="rounded-full absolute top-2"
              src={bot.imageUrl}
              alt=""
            />
            <ReactSVG
              src="/border.svg"
              beforeInjection={handleSVGInjection}
              className="border-b-[1.25rem] border-black"
            ></ReactSVG>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
