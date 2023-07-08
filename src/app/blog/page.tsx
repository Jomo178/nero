import Image from "next/image";
import Link from "next/link";
import Navbar from "@/src/components/navbar";
import getPostMetadata from "@/src/function/blog";
import { formatDate } from "@/src/function/functions";
import { PostMetadata } from "@/src/types";
import { compareDesc } from "date-fns";

const HomePage = () => {
  const postMetadata = getPostMetadata();

  const filterPostMetadata = postMetadata
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  const postPreviews = filterPostMetadata.map((post) => (
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
        <div className="grid gap-10 sm:grid-cols-2">{postPreviews}</div>
      </div>
    </>
  );
};

const PostPreview = (post: PostMetadata) => {
  return (
    <>
      <article className="group relative flex flex-col space-y-2">
        <Image
          src={post.image}
          alt={post.title}
          width={804}
          height={452}
          className="rounded-md border bg-muted transition-colors"
        />

        <h2 className="text-2xl font-extrabold">{post.title}</h2>

        <p className="text-muted-foreground">{post.description}</p>

        <p className="text-sm">{formatDate(post.date)}</p>
        <Link href={post.slug} className="absolute inset-0">
          <span className="sr-only">View Article</span>
        </Link>
      </article>
    </>
  );
};

export default HomePage;
