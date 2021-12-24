import { useState, useEffect } from "react";
import CodeEditor from "./code-editor";
// @ts-ignore
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";

const CodeCell = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const initialValue = `import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
      <>
        <h1>Hello World!</h1>
      </>
    )
}
ReactDOM.render(<App />, document.querySelector("#root"));
  `;

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={initialValue}
            onChange={(value) => {
              setInput(value);
            }}
          />
        </Resizable>
        <div></div>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
