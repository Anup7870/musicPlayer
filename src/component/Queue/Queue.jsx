import React from "react";
import "./queue.scss";
export default function Queue({ tracks, setCurrentIndex }) {
  // console.log(tracks);
  return (
    <div className='queueCont flex'>
      <div className='queue flex'>
        <p className='upNext'>Up Next</p>
        <div className='queueList'>
          {tracks?.map((item, index) => (
            <div
              className='queueItem flex'
              onClick={() => setCurrentIndex(index) }>
              <p className='trackName'>{item?.track?.name}</p>
              <p>0:03</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
