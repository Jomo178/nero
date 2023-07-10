import fs from "fs";
import matter from "gray-matter";

import { PostMetadata } from "../types";

export function getPostMetadata(): PostMetadata[] {
  const folder = "src/content/blog/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");

    const fileInfo = matter(fileContents).data;

    return {
      title: fileInfo.title,
      description: fileInfo.description,
      image: fileInfo.image,
      authors: fileInfo.authors,
      published: fileInfo.published,
      date: fileInfo.date,
      readTime: fileInfo.readTime,
      slug: "/blog/" + fileName.replace(".mdx", ""),
    };
  });

  return posts;
}

export function getPostContent(slug: string) {
  const folder = "src/content/blog/";
  const file = `${folder}${slug}.mdx`;
  const fileContent = fs.readFileSync(file, { encoding: "utf8" });
  const contentResults = matter(fileContent);

  return {
    information: contentResults.data,
    content: contentResults.content,
  };
}
