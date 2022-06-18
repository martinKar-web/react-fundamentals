import React, { useState, useEffect } from "react";

// used when setting up side effects, that is some work outside of the component
// for example data fetching, listening for events
// by default useEffect runs after every re-render
// whatever code is the callback function of the useEffect hook will run after every render
// cleanup function
// second parameter

// even though you cannot put react hooks inside a condition,
// you can put a condition inside a react hook
// you can have as many useEffects as you want

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    //console.log("call useEffect");

    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  
  useEffect(() => {
    console.log('hello world')
  },[])
  // if the dependency array is empty, our use effect callback only runs on the initial render
  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
