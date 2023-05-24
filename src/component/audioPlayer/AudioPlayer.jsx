import React, { useEffect, useRef, useState } from "react";
import "./audioPlayer.scss";
import Progress from "../../component/audioPlayer/ProgressCircle";
import WaveAnimation from "./WaveAnimation";
import Control from "./Control";
export default function AudioPlayer({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total,
}) {
    // storing artist name
    const artists = [];
    currentTrack?.album?.artists?.forEach((artist) => {
        artists.push(artist.name);
    });

    // handling song about its track source
    const [isPlaying, setIsPlaying] = useState(true);
    const [trackProgress, setTrackProgress] = useState(0);
    var audioSource = total[currentIndex]?.track.preview_url;
    const audioRef = useRef(new Audio(total[currentIndex]?.track.preview_url));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;
    const currentPer = duration?(trackProgress/duration)*100:0 ;

    // console.log(currentPer);

    const startTimer = () =>{
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(()=>{
            if(audioRef.current.ended){
                handleNext();
            }
            else{
                setTrackProgress(audioRef.current.currentIndex);
            }
        },[1000])
    }
    

    useEffect(()=>{
        if(isPlaying&&audioRef.current){
            audioRef.current = new Audio(audioSource);
            audioRef.current.play();
            startTimer();
        }
        else{
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    },[isPlaying])

    useEffect(()=>{
        audioRef.current.pause();
        audioRef.current = new Audio(audioSource);
        setTrackProgress(audioRef.current.currentTime);
        if(isReady.current){
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        }
        else{
            isReady.current=true;
        }
       
    },[currentIndex])

    useEffect(()=>{
        return()=>{
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    },[])

    // handling button
    const handleNext = () =>{
        if(currentIndex<total.length-1){
            setCurrentIndex(currentIndex+1)
        }
        else {
            setCurrentIndex(0)
        }
    }
    const handlePrev = () =>{
        if(currentIndex-1<0){
            setCurrentIndex(total-1)
        }
        else{
            setCurrentIndex(currentIndex-1);
        }
    }
    return (
        <div className='playerBody'>
            <div className='playerLeftBody'>
                <Progress
                    percentage={currentPer}
                    isPlaying={true}
                    image={currentTrack?.album?.images[0]?.url}
                    size={250}
                    color='#c96850'
                />
            </div>
            <div className='playerRightBody'>
                <p className='songTitle'>{currentTrack?.name}</p>
                <p className='songArtist'>{artists.join(" | ")}</p>
                <div className='playerRightBotton'>
                    <div className='songDuration'>
                        <p className='duration'>{Math.round(trackProgress)}</p>
                        <WaveAnimation isPlaying={true} />
                        <p className='duration'>0:30</p>
                    </div>
                    <Control
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        total={total}
                    />
                </div>
            </div>
        </div>
    );
}
