import React from "react";
import "./albuminfo.scss";
export default function AlbumInfo({ album }) {
  const artistsA = [];
  album?.artists.forEach((element) => {
    artistsA.push(element.name);
  });

  return (
    <>
      <div className='albumInfoCard'>

        <div className='albumNameCont'>
          <div className='sideAnimation'>
            <p>{album?.name + " - " + artistsA.join(", ")}</p>
          </div>
          <div className='albumInfo'>
            <p>{`${album?.name} is an ${album?.album_type} with ${album?.total_tracks} tracks`}</p>
          </div>
          <div className='albumRelease'>
            <p>Release Date: {album?.release_date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
