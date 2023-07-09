import { DiscordUser } from "../types";
import { processAvatar } from "./avatar";

export async function getUserData(
  access_token: string | undefined,
  keysToDelete: string[] = []
) {
  let userData: DiscordUser | undefined = await usersDataPromise(access_token);

  // let botData: DiscordUser | undefined;

  // try {
  //   [userData, botData] = await Promise.all([
  //     usersDataPromise(access_token),
  //     botsDataPromise(),
  //   ]);
  // } catch (error) {
  //   userData = undefined;
  //   botData = await botsDataPromise();
  // }

  userData = processAvatar(userData, keysToDelete);
  // botData = processAvatar(botData, keysToDelete);

  return userData;
}

function usersDataPromise(
  access_token: string | undefined
): Promise<DiscordUser> {
  return new Promise((resolve, reject) => {
    fetch(`https://discord.com/api/v10/users/@me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Bad request: ${response.status}`);
        }
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function botsDataPromise(): Promise<DiscordUser> {
  return new Promise((resolve, reject) => {
    fetch(`https://discord.com/api/v10/users/@me`, {
      headers: {
        Authorization: `Bot ${process.env.CLIENT_TOKEN}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Bad request: ${response.status}`);
        }
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}
