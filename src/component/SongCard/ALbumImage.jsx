import React from 'react'
import './albumImage.scss'
export default function ALbumImage({ url }) {
  // console.log(url);
  return (
    <div className="albumImage">
      <img src={url} alt="album art" />
      <div className="albmumImagrShadow">
        <img src={url} alt="album-image-shadow" />
      </div>
    </div>

  )
}
