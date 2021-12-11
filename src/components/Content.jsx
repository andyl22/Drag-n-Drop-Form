import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import './Content.scss';

export default function Content() {
  return (
    <div className="content">
      <LeftContent />
      <RightContent />
    </div>
  )
}