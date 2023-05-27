import React from "react";
import "./control.scss";
import { IconContext } from "react-icons";
import {IoPlayBack,IoPlayForward,IoPlay} from "react-icons/io5"
export default function Control(isPlaying, setIsPlaying, handleNext, handlePrev) {
  return (
    <IconContext.Provider value={{size: "35px", color:"#c4d0e3"}}>
     <div className="controlWrapper">
      <div className="actionButton" onClick={handlePrev}>
        <IoPlayBack/>
      </div>
      <div className="playPauseBtn" onClick={()=> setIsPlaying(isPlaying)}>
        <IoPlay/>
      </div>
      <div className="actionButton" onClick={handleNext}>
        <IoPlayForward/>
      </div>
</div>
  </IconContext.Provider>
  );
  
 
}
