export type DiscordUser = {
  id: string;
  username: string;
  avatar: string;
  email?: string;
  avatar_decoration: null;
  discriminator: string;
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
