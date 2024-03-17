import React, { useState } from "react";

export default function Temp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // console.log("bbxzx");
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <>
      <div className="space-y-7 mt-0">
      <button onClick={()=>handleClick()}>Incremental</button>
      <p>Count: {count}</p>
      </div>
    </>
  );
}
