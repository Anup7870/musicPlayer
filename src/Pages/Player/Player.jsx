import React, { useEffect, useState } from "react";
import "./player.scss";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../component/SongCard/SongCard";
import Queue from "../../component/Queue/Queue";
import AudioPlayer from "../../component/audioPlayer/AudioPlayer";

export default function Player() {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (location.state) {
            // cheking state is passed or not
            apiClient
                .get("playlists/" + location.state.id + "/tracks")
                .then((response) => {
                    setTracks(response?.data.items);
                    setCurrentTack(response?.data.items[0].track);
                });
        }
    }, [location.state]); // whenever location chages it re-run

    useEffect(() => {
        setCurrentTack(tracks[currentIndex]?.track);
    }, [currentIndex, tracks]);

    return (
        <div className='screenContainer flex'>
            <div className='leftPLayer'>
                <AudioPlayer
                    currentTrack={currentTrack}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    total={tracks}
                />
            </div>
            <div className='rightPlayer'>
                <SongCard album={currentTrack?.album} />
                <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
            </div>
        </div>
    );
}
