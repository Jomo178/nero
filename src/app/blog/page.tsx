import Link from "next/link";
import Navbar from "@/src/components/navbar";
import getPostMetadata from "@/src/function/blog";
import { PostMetadata } from "@/src/types";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <Navbar></Navbar>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              A blog built using Contentlayer. Posts are written in MDX.
            </p>
          </div>
        </div>
        <hr className="my-8" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </>
  );
};

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
      bg-white"
    >
      <p className="text-sm text-slate-400">{props.title}</p>

      <Link href={`/blog/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.description}</p>
    </div>
  );
};

export default HomePage;
