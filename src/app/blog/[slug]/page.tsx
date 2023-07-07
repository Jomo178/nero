import fs from "fs";
import getPostMetadata from "@/src/function/blog";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
  const folder = "src/content/blog/";
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
