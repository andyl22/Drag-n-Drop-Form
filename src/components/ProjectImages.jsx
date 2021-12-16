import React, { useState, useCallback, createRef, useEffect, useMemo } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './ProjectImages.scss';
import Image from "./Image.jsx"


export default function ProjectImages() {
  const [imageArray, setImageArray] = useState([1, 2, 3, 4]);
  const [currentlyDragging, setCurrentlyDragging] = useState(null);
  const [prevState, setPrevState] = useState(null);

  const handleDragStart = (e) => {
    e.target.classList.add("dragging")
    e.dataTransfer.effectAllowed = "copy";
    setPrevState(imageArray);
    setCurrentlyDragging(e.target);
    console.log(e.dataTransfer.getData("text"))
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.setData("value", e.target.getAttribute("data-value"))
    e.dataTransfer.dropEffect = "copy";
    const dragTarget = checkIfParent(e);
    updateImageArray(currentlyDragging, dragTarget);
  }

  const handleDelete = (value) => {
    setImageArray(imageArray.filter(image => image !== value))
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setPrevState(null);
  }

  const handleDragEnd = (e) => {
    if(prevState !== null) {
      setImageArray([...prevState])
    }
    e.target.classList.remove("dragging")
  }

  const updateImageArray = (currentlyDragging, dragTarget) => {
    const draggingValue = parseInt(currentlyDragging.getAttribute("data-value"));
    const targetValue = parseInt(dragTarget.getAttribute("data-value"));
    const indexOfDrag = imageArray.indexOf(draggingValue);
    const indexOfTarget = imageArray.indexOf(targetValue);
    const copyOfArray = [...imageArray];
    copyOfArray.splice(indexOfDrag, 1 );
    copyOfArray.splice(indexOfTarget, 0, draggingValue)
    setImageArray(copyOfArray)
  }

  const checkIfParent = (e) => {
    let target = e.target;
    while (!target.classList.contains("image-container")) target=target.parentNode;
    return target;
  }

  const addImage = () => {
    setImageArray([...imageArray, imageArray.reduce((prev, current) => {
      return Math.max(prev, current)
    },0)+1]);
  }

  return (
    <div className="project-images">
      <div>
        PROJECT IMAGES
        <ArrowDropDownIcon className="icon" />
      </div>
      <button onClick={addImage}> Attach file </button>
      <div className="images-container">
        {imageArray.map((image) => {
          return (
            <Image 
              name={image} 
              key={image}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              handleDelete={handleDelete}
              handleDragEnd={handleDragEnd}
            />
          )
        })}
      </div>
    </div>
  )
}