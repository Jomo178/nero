import fs from "fs";
import matter from "gray-matter";

import { PostMetadata } from "../types";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "src/content/blog/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const { title, description, image, authors } = matter(fileContents).data;
    return {
      title,
      description,
      image,
      authors,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
