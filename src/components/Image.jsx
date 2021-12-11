import React, { useRef, useEffect } from "react";
import "./Image.scss";
import HalloweenCat from "../assets/images/HalloweenCat.jpg";
import DeleteIcon from '@mui/icons-material/Delete';
import PanToolIcon from '@mui/icons-material/PanTool';

export default function Image(props) {
  const imageRef = useRef(0)
  useEffect(() => {


    imageRef.current.addEventListener('dragstart', () => {
      imageRef.current.classList.add('dragging')
    })
  
    imageRef.current.addEventListener('dragend', () => {
      imageRef.current.classList.remove('dragging')
    })
  }, [])

  return (
    <div className="image-container" ref={imageRef}>
      <img src={HalloweenCat} className="image"/>
      <div className="image-metadata">
        {props.name}
        <div className="hidden-icons">
          <DeleteIcon className="icon" onClick={
            () => props.handleDelete(props.name)}/>
          <PanToolIcon className="icon"/>
        </div>
      </div>
    </div>
  )
}