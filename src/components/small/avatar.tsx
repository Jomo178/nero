function ImageAvatar({ src }: { src: string }) {
  return (
    <>
      <img
        className="h-7 w-7 rounded-full shadow-outline-normal"
        src={src}
        alt="avatar"
      ></img>
    </>
  );
}

export const bot = {
  imageUrl:
    "https://cdn.discordapp.com/avatars/542770757382569994/fad5207a33644450890312e26a2183fb.webp?size=128",
  name: "Nero",
  mail: "support@nero.com",
  support: "https://discord.gg/FEED4XCq",
  login:
    "https://discord.com/api/oauth2/authorize?client_id=1122188019810717819&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email",
  banner:
    "https://cdn.discordapp.com/attachments/988824682704797697/1086931420959744050/image.png",
};

export default ImageAvatar;
