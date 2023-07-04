import { DiscordUser } from "../types";

function avatar(data: DiscordUser): string {
  if (data.avatar == null || data.avatar == undefined) {
    return `https://cdn.discordapp.com/embed/avatars/${data.discriminator}.png`;
  } else {
    return `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.${
      data.avatar.startsWith("a_") ? "gif" : "png"
    }`;
  }
}

export function processAvatar(data: DiscordUser | undefined) {
  if (data) {
    data.avatar = avatar(data);
    delete data.email;
  }
  return data;
}
