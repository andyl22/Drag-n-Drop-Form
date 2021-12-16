import React from "react";
import "./Image.scss";
import HalloweenCat from "../assets/images/HalloweenCat.jpg";
import Spiderman from "../assets/images/Spiderman.png";
import Batman from "../assets/images/Batman.jpg";
import Snowman from "../assets/images/Snowman.png";
import DeleteIcon from '@mui/icons-material/Delete';
import PanToolIcon from '@mui/icons-material/PanTool';

export default function Image(props) {

  const {handleDragStart, handleDragOver, handleDrop, handleDragEnd} = props;

  const getImageToUse = () => {
    switch(props.name) {
      case 1:
        return Batman;
      case 2:
        return Snowman;
      case 3:
        return Spiderman;
      case 4:
        return HalloweenCat;
      default:
        return HalloweenCat;
    }
  }

  return (
    <div className="image-container" data-value={props.name} draggable="true" onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} onDragEnd={handleDragEnd}>
      <img 
        src= {getImageToUse()}
        className="image"
        alt ='test'
        draggable="false"
        />
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