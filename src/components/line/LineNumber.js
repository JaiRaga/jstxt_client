import React from "react";

const LineNumber = () => {
  let num = 120,
    arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return (
    <div className='number'>
      {arr.map((i, ind) => (
        <div key={ind} className='num'>
          {i}
        </div>
      ))}
    </div>
  );
};

export default LineNumber;
