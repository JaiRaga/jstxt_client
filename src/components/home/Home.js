import React from "react";
import "./Home.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FileArea from "../files/FileArea";
import Editor from "../editor/Editor";
import CodeSnapShot from "../editor/CodeSnapShot";
import EditorArea from "../editor/EditorArea";


const Home = () => {
  return (
    <div class='container'>
      <div class='navbar'>
        <Navbar />
      </div>
      <div class='filearea'>
        <FileArea />
      </div>
      <div className="editorarea">
        <EditorArea />
      </div>
      <div class='footermenu'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
