import { bot } from "../small/avatar";

function ProfileHeader() {
  return (
    <header>
      {" "}
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <defs>
          {" "}
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            {" "}
            <stop
              id="stop1"
              stop-color="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>{" "}
            <stop
              id="stop2"
              stop-color="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <path
          fill="none"
          d="M18.3,10.7C11.9,21.6,-13.2,21.9,-19.4,11.1C-25.5,0.4,-12.8,-21.4,-0.2,-21.5C12.3,-21.6,24.6,-0.1,18.3,10.7Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="1"
          style={{ transition: "all 0.3s ease 0s" }}
          stroke="url(#sw-gradient)"
        ></path>{" "}
      </svg>
      <img src={bot.imageUrl} alt="" />
      {/* <div className="relative w-screen"></div> */}
    </header>
  );
}

export default ProfileHeader;
