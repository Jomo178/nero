import fs from "fs";
import * as React from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
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
  const folder = "src/content/blog/";
  const file = `${folder}${slug}.mdx`;
  const fileContent = fs.readFileSync(file, { encoding: "utf8" });
  const contentResults = matter(fileContent);

  let matterResult = await serialize(contentResults.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
      ],
    },
    // mdxOptions: {
    //   remarkPlugins: [remarkGfm],
    //   rehypePlugins: [
    //     rehypeSlug,
    //     [
    //       rehypePrettyCode,
    //       {
    //         theme: "github-dark",
    //         onVisitLine(node) {
    //           if (node.children.length === 0) {
    //             node.children = [{ type: "text", value: " " }];
    //           }
    //         },
    //         onVisitHighlightedLine(node) {
    //           node.properties.className.push("line--highlighted");
    //         },
    //         onVisitHighlightedWord(node) {
    //           node.properties.className = ["word--highlighted"];
    //         },
    //       },
    //     ],
    //     [rehypeAutolinkHeadings],
    //   ],
    // },
  });

  return {
    information: contentResults.data,
    content: contentResults.content,
    source: matterResult,
  };
}
