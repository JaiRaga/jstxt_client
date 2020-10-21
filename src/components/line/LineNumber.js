import React from "react";

const LineNumber = () => {
  let num = 120,
    arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return (
    <div className='number'>
      <div className='inner'>
        {/* <div className='num'> */}
        {arr.map((i, ind) => (
          <div key={ind}>{i}</div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default LineNumber;
