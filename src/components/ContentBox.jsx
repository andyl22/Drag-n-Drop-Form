import React from "react";
import './ContentBox.scss';
import Header from "./Header.jsx";
import Content from "./Content.jsx"

function ContentBox() {
  return (
    <div className="content-box">
      <Header />
      <Content />
    </div>
  )
}

export default ContentBox;