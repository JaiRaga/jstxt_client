import React from "react";

const LineNumber = () => {
  let num = 13,
    arr = [];

  for (let i = 1; i <= 13; i++) {
    arr.push(i);
  }
  return (
    <div className='number'>
      {arr.map((i) => (
        <div>{i}</div>
      ))}
    </div>
  );
};

export default LineNumber;
