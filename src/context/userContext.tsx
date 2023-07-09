import { create } from "zustand";

import { DiscordUser } from "../types";

interface UserData {
  data: DiscordUser | undefined;
  setData: (data: UserData | undefined) => void;
}

interface BotData {
  data: {
    username: string;
    avatar: string;
    supportServerLink: string;
    supportEMail: string;
    loginLink: string;
    banner: string;
  };
  setData: (data: BotData) => void;
}

export const useUserData = create<UserData>((set) => ({
  data: undefined,
  setData: (data: any) => set({ data }),
}));

export const useBotData = create<BotData>((set) => ({
  data: {
    username: "Nero",
    avatar:
      "https://cdn.discordapp.com/avatars/960575071645216778/1c969818b37962c67eef7dbbf416d868.webp?size=80",
    banner:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64ae6631986403.56700f4545419.jpg",
    loginLink:
      "https://discord.com/api/oauth2/authorize?client_id=1122188019810717819&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email",
    supportServerLink: "https://discord.gg/FEED4XCq",
    supportEMail: "support@nero.com",
  },
  setData: (data: any) => set({ data }),
}));
