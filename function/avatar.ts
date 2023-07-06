import { DiscordUser } from "../types";

function avatar(data: DiscordUser): string {
  if (data.avatar == null || data.avatar == undefined) {
    return `https://cdn.discordapp.com/embed/avatars/${
      data.discriminator.length == 4
        ? Number(data.discriminator) % 5
        : data.discriminator
    }.png`;
  } else {
    return `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.${
      data.avatar.startsWith("a_") ? "gif" : "png"
    }`;
  }
}

export function processAvatar(
  data: DiscordUser | undefined,
  keysToDelete: string[] = []
) {
  if (data) {
    data.avatar = avatar(data);

    for (const key of keysToDelete) {
      if (data.hasOwnProperty(key)) {
        delete (data as any)[key];
      }
    }
  }
  return data;
}
