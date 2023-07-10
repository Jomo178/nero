"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";

import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-typescript";

import { tw } from "@/src/function/functions";

const Code = ({ children, language, fileDirectory }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const highlight = (codeArea) => {
    if (language && Prism.languages[language]) {
      return Prism.highlight(codeArea, Prism.languages[language], language);
    } else {
      return codeArea;
    }
  };

  const languageClassName = tw(
    "relative px-[0.3rem] py-[0.2rem] font-mono text-base bg-steel-800"
  );

  return (
    <div className="border rounded my-3">
      <pre className={languageClassName}>
        <p className="ms-2">{fileDirectory}</p>
      </pre>
      <Editor
        ref={editorRef}
        value={children}
        onValueChange={() => {}}
        highlight={highlight}
        padding={10}
        readOnly
        style={{
          fontFamily: "Consolas, monospace",
          fontSize: 14,
          backgroundColor: "#000000",
          color: "#f8f8f2",
          borderRadius: 4,
        }}
        preClassName=""
      />
    </div>
  );
};

export default Code;
