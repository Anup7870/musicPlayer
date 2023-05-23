import React, { useEffect, useState } from "react";
import apiClient from "../../spotify";
import "./library.scss";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Library() {
    const [playList, setPlatList] = useState(null);
    useEffect(() => {
        apiClient.get("me/playlists").then(function (res) {
            // console.log(res.data.items)
            setPlatList(res.data.items);
        });
    }, []);
    const navigate =useNavigate();
    // on click event 
    const playPlayList =(id)=>{
        // console.log(id)
      navigate("/player",{state:{id:id}});
    }

    return (
        <div className='screenContainer'>
            <div className='libraryBody'>
                {playList?.map((playList) => (
                    <div 
                    className='playlistCard' 
                    key={playList.id}
                    onClick={()=> playPlayList(playList.id)}
                    >
                        <img
                            src={playList.images[0].url}
                            alt=''
                            className='playListImg'
                        />
                        <p className='playaListName'>{playList.name}</p>
                        <p className='playaListToatl'>
                          songs {playList.tracks.total} 
                        </p>
                        <div className='playListFade'>
                            <IconContext.Provider
                                value={{ size: "45px", color: "#E99D72" }}>
                                <AiFillPlayCircle />
                            </IconContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
