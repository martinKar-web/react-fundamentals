import React, { useState } from "react";

// rules for react hooks
// all begin with the word use
// component name where a hool is used must begin with uppercase
// must be called in the function/component body
// cannot call them conditionally

const UseStateBasics = () => {
  //console.log(useState);
  //console.log(useState("hello world"));
  //const value = useState(1)[0];
  //const handler = useState(1)[1];
  //console.log(value, handler);

  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
