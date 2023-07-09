import fs from "fs";
import * as React from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { PostMetadata } from "../types";

export function getPostMetadata(): PostMetadata[] {
  const folder = "src/content/blog/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const { title, description, image, date, authors, published } =
      matter(fileContents).data;

    return {
      title,
      description,
      image,
      authors,
      published,
      date,
      slug: "/blog/" + fileName.replace(".mdx", ""),
    };
  });

  return posts;
}

export async function getPostContent(slug: string) {
  // const folder = "src/content/blog/";
  // const file = `${folder}${slug}.mdx`;
  // const content = fs.readFileSync(file, "utf8");

  // let matterResult = await compileMDX<PostMetadata>({
  //   source: content,
  //   options: {
  //     parseFrontmatter: true,
  //     mdxOptions: {
  //       remarkPlugins: [remarkGfm],
  //       rehypePlugins: [
  //         rehypeSlug,
  //         [
  //           rehypePrettyCode,
  //           {
  //             theme: "github-dark",
  //             onVisitLine(node) {
  //               // Prevent lines from collapsing in `display: grid` mode, and allow empty
  //               // lines to be copy/pasted
  //               if (node.children.length === 0) {
  //                 node.children = [{ type: "text", value: " " }];
  //               }
  //             },
  //             onVisitHighlightedLine(node) {
  //               node.properties.className.push("line--highlighted");
  //             },
  //             onVisitHighlightedWord(node) {
  //               node.properties.className = ["word--highlighted"];
  //             },
  //           },
  //         ],
  //         [
  //           rehypeAutolinkHeadings,
  //           {
  //             properties: {
  //               className: ["subheading-anchor"],
  //               ariaLabel: "Link to section",
  //             },
  //           },
  //         ],
  //       ],
  //     },
  //   },
  // });

  const folder = "src/content/blog/";
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  const frontmatter = matter(content).data;

  return { frontmatter, content: matterResult };
}
