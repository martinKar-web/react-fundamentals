import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  //const firstValue = text || "hello world";
  // -||- If the first value is false return the second value

  //const secondValue = text && "hello world";
  // && - if the first value is true, only then, return the second otherwise return nothing

  return (
    <>
      <h1>{text || "john doe"}</h1>
      {/* if text is true, return text otherwise return 'john doe' */}

      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {/*{text && <h1>text is true</h1>}*/}
      {/* if text is true, return the h1 */}

      {/*{!text && <h1>text is not true</h1>}*/}
      {/* if text is not true, then return the h1 */}

      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error...</p> : <h2>There's no error</h2>}

      {/*{/*<h1>{firstValue}</h1>*/}
      {/*<h1>{secondValue}</h1>*/}
      {/*{ if(){console.log()}}*/}
    </>
  );
};

export default ShortCircuit;
