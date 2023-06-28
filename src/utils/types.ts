export type users_discord_info_obj = {
  id: string;
  username: string;
  avatar: string;
  email: string;
  avatar_decoration: null;
  global_name: string;
  public_flags: number;
  flags: number;
  banner: null;
  banner_color: null;
  accent_color: null;
  locale: string;
  mfa_enabled: boolean;
};

export type access_token_response = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
};

export function avatar(id: string, avatar: string): string {
  if (avatar == null || avatar == undefined) {
    return `https://cdn.discordapp.com/embed/avatars/${Math.floor(
      Math.random() * (5 - 1 + 1) + 1
    )}.png`;
  } else {
    return `https://cdn.discordapp.com/avatars/${id}/${avatar}.${
      avatar.startsWith("a_") ? "gif" : "png"
    }`;
  }
}
