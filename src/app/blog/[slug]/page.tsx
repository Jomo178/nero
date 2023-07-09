import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import { CustomMDX } from "@/src/components/blog/components";
import { getPostContent, getPostMetadata } from "@/src/function/blog";
import { formatDate } from "@/src/function/functions";
import { prisma } from "@/src/lib/db";
import { DiscordUser, PostMetadata } from "@/src/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { compileMDX, CompileMDXResult, MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const { content, frontmatter } = await getPostContent(slug);

  const authors = frontmatter.authors.map((author) => ({
    name: author,
  }));

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className="absolute left-[-200px] top-14 hidden xl:inline-flex"
      >
        <MdKeyboardArrowLeft className="mr-2 h-4 w-4"></MdKeyboardArrowLeft>
        See all posts
      </Link>
      <div>
        <time
          dateTime={frontmatter.date}
          className="block text-sm text-muted-foreground"
        >
          Published on {formatDate(frontmatter.date)}
        </time>

        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {frontmatter.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author.name}
                  href={`https://twitter.com/${author.name}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src="/images/avatar/jomo.png"
                    alt={author.name}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.name}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.name}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      <Image
        src={frontmatter.image}
        alt={frontmatter.title}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      <CustomMDX source={content.content} />

      {/*
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={tw(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div> */}
    </article>
  );
};

export default PostPage;
