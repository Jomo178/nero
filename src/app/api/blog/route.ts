import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const content = `---
    title: First Blogsadasdas
    description: Why Nero?
    image: /images/blog/blog-post-1.png
    date: "2023-07-07"
    authors:
      - 542770757382569994
      - 398314054147637248
    ---
    
    Your MDX content goes here...
    `;

  fs.writeFile("src/content/blog/file.mdx", content, (err) => {
    if (err) {
      console.error("Error creating MDX file:", err);
    } else {
      console.log("MDX file created successfully!");
    }
  });

  return NextResponse.json({ product: "ddd" });
}
