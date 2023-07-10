import Image from "next/image";
import Link from "next/link";
import { CustomMDX } from "@/src/components/blog/components";
import { getPostContent } from "@/src/function/blog";
import { formatDate } from "@/src/function/functions";
import { MdKeyboardArrowLeft } from "react-icons/md";

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const { content, information } = getPostContent(slug);

  const authors = information.authors.map((author) => ({
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
          dateTime={information.date}
          className="block text-sm text-muted-foreground"
        >
          Published on {formatDate(information.date)}
        </time>

        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {information.title}
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
        src={information.image}
        alt={information.title}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      <CustomMDX source={content}></CustomMDX>
    </article>
  );
};

export default PostPage;
