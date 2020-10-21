import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import prettier from "prettier/standalone";
import babel from "prettier/parser-babel";
import htmlparser from "prettier/parser-html";
import cssparser from "prettier/parser-postcss";
import "../home/Home.css";
import CodeSnapShot from "./CodeSnapShot";
import LineNumber from "../line/LineNumber";

const useStyles = makeStyles((theme) => ({
  container: {
    gridColumn: "span 23",
    gridRow: "span 24"
  },
  textarea: {
    resize: "none",
    gridColumn: "span 24",
    gridRow: "span 24",
    lineHeight: "20px",
    fontSize: "16px",
    paddingLeft: "34px",
    paddingRight: "74px",
    border: "none",
    outline: "none",
    backgroundColor: "#aaa",
    overflowY: "auto"
  },
  nums: {
    marginRight: "auto"
  }
}));

const Editor = () => {
  const classes = useStyles();
  const [rawCode, setRawCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");

  const onChange = (e) => {
    setRawCode(e.target.value);
    // setFormattedCode(
    //   prettier.format(rawCode, {
    //     semi: false,
    //     parser: "babel",
    //     plugins: [babel]
    //   })
    // );
    console.log(rawCode);
    console.log(formattedCode);
  };

  const onClick = () => {
    // setFormattedCode(
    //   prettier.format(rawCode, {
    //     semi: false,
    //     parser: "html",
    //     plugins: [babel, htmlparser, cssparser],
    //     tabWidth: 2
    //   })
    // );
    // setRawCode(formattedCode);
  };

  return (
    <div className='codeeditor'>
      {/* <LineNumber /> */}
      <textarea
        className={classes.textarea}
        name='editor'
        value={formattedCode || rawCode}
        onChange={onChange}
        onClick={onClick}
        autofocus
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
      />
    </div>
  );
};

export default Editor;
