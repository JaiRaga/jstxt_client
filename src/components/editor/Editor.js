import React from "react";
import { makeStyles } from "@material-ui/styles";
import "../home/Home.css";

const useStyles = makeStyles((theme) => ({
  container: {
    gridColumn: "span 23",
    gridRow: "span 24"
  },
  textarea: {
    resize: "none",
    gridColumn: "span 24",
    gridRow: "span 24"
  }
}));

const Editor = () => {
  const classes = useStyles();
  return (
    <div className='codeeditor'>
      <textarea className={classes.textarea} autofocus />
    </div>
  );
};

export default Editor;
