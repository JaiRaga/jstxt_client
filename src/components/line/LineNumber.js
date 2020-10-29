import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lineNumber: {
    gridColumn: "span 4",
    gridRow: "span 24",
    resize: "none",
    boreder: "none",
    outline: "none",
    textAlign: "right",
    cursor: "auto"
  }
}));

const LineNumber = () => {
  let num = 120,
    arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  const classes = useStyles();

  return (
    <div className='number'>
      <textarea
        className={classes.lineNumber}
        readOnly
        name='number'
        value={1}
        autoCorrect='off'
        autoCapitalize='off'
      />
    </div>
  );
};

export default LineNumber;
