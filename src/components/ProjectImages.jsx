import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './ProjectImages.scss';
import Image from "./Image.jsx"


export default function ProjectImages() {
  const handleDelete = (name) => {
    setImageArray(imageArray.filter(image => image !== name))
  }

  

  const [imageArray, setImageArray] = useState([1, 2, 3, 4])

  const addImage = () => {
    let number = imageArray[imageArray.length - 1] + 1 || 1
    setImageArray([...imageArray, number])
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
            <Image name={image} 
              handleDelete={handleDelete}
            />
          )
        })}
      </div>
    </div>
  )
}