import React, { useState, useEffect, useRef } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./LeftContent.scss";
import ProjectImages from "./ProjectImages.jsx";

export default function LeftContent() {
  const [active, setActive] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if(inputRef.current.contains(e.target)) {
        setActive(true);
      } else {
        setActive(false);
      }
    })
  }, [])

  
  return (
    <div className="left-content">
      <div className="title">
        Unnamed record  
        <ArrowDropDownIcon className="icon" />
      </div>
      <div className={`inputs ${active && "inputs-active"}`} ref={inputRef}>
        <div className="input-label">
          <div className="input-name caps">name</div>
          <ArrowDropDownIcon className="icon" />
        </div>
        <input type="text" className="input-box"></input>
      </div>
      <ProjectImages />


    </div>
  )
}
