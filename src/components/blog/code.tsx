// import { prettyCode } from "@/src/function/blog";
"use client";

import { tw } from "@/src/function/functions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = async ({ children, language }) => {
  const languageClassName = tw(
    "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm"
  );

  return (
    <div>
      <pre className={languageClassName}>
        <code>{language}</code>
      </pre>
      <pre>
        <SyntaxHighlighter language={language} style={atomDark} showLineNumbers>
          {children}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
};

export default Code;
