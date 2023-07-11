import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import "../../../styles/mdx.css";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mdx } from "@/src/components/blog/mdx-components";
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import { absoluteUrl, cn, formatDate } from "@/src/function/functions";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { env } from "@/env.mjs";

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: any) {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`https://tx.shadcn.com/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  // const authors = post.authors.map((author) =>
  //   allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  // );

  return (
    <>
      <Navbar></Navbar>
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <Link
          href="/blog"
          className={cn(
            "absolute left-[-200px] top-14 hidden items-center xl:inline-flex"
          )}
        >
          <MdKeyboardArrowLeft className="mr-2 h-4 w-4"></MdKeyboardArrowLeft>
          See all posts
        </Link>
        <div>
          {post.date && (
            <time
              dateTime={post.date}
              className="block text-sm text-muted-foreground"
            >
              Published on {formatDate(post.date)}
            </time>
          )}
          <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
            {post.title}
          </h1>
          {/* {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null} */}
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="my-8 rounded-md border bg-muted transition-colors"
            priority
          />
        )}
        <Mdx code={post.body.code} />
        <hr className="mt-12" />
      </article>
      <Footer></Footer>
    </>
  );
}
