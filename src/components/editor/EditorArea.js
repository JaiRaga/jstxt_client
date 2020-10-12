import React, { Fragment } from 'react'
import Editor from "../editor/Editor";
import CodeSnapShot from "../editor/CodeSnapShot";
import "../home/Home.css";

const EditorArea = () => {
    return (
        <Fragment>
            <div class='editor'>
                <Editor />
            </div>
            <div class='codesnapshot'>
                <CodeSnapShot />
            </div>
        </Fragment>
    )
}

export default EditorArea
