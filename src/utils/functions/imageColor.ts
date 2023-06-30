import Vibrant from "node-vibrant";

export async function fetchImage(url: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = url;
  return new Promise((resolve) => {
    image.onload = () => resolve(image);
  });
}

export async function getDominantColor(url: string): Promise<string> {
  const image = await fetchImage(url);
  Vibrant.from(image).getPalette((err, palette) => console.log(palette));
  //   const palette = await Vibrant.from(url).getPalette();
  //   const dominantColor =
  //     palette.Vibrant ||
  //     palette.Muted ||
  //     palette.DarkVibrant ||
  //     palette.DarkMuted ||
  //     palette.LightVibrant ||
  //     palette.LightMuted;

  return "jadkasjdk";
  //   return dominantColor ? dominantColor.hex : "#000000";
}
