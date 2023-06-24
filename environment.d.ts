declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      CLIENT_TOKEN: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      REDIRECT_URI: string;
    }
  }
}

export {};
