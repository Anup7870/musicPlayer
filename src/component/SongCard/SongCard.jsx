import React, { useState } from 'react'
import './songCard.scss'
import AlbumInfo from './AlbumInfo'
import AlbumImage from './ALbumImage'
export default function SongCard({album}) {
  //  console.log(album?.images[0]?.url);
     
  return (
    <div className='songCardBody'>
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} className="info"/>
    </div>
  )
}
