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
};

export default ImageAvatar;
