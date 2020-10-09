import React from "react";
import "./Home.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FileArea from "../files/FileArea";
import Editor from "../editor/Editor";
import CodeSnapShot from "../editor/CodeSnapShot";

const Home = () => {
  return (
    <div class='container'>
      <div class='navbar'>
        <Navbar />
      </div>
      <div class='filearea'>
        <FileArea />
      </div>
      <div class='editor'>
        <Editor />
      </div>
      <div class='codesnapshot'>
        <CodeSnapShot />
      </div>
      <div class='footermenu'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
