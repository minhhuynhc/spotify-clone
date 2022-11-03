import React, { useEffect, useRef, useState } from 'react';
import "./style.css"
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Grid, Slider } from '@mui/material';
import { useDataLayerValue } from '../DataLayer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from './FavoriteIcon';
import VolumeIcon from './VolumeIcon';
import { baseURL } from '../../config';
import InfoIcon from '@mui/icons-material/Info';

const Footer = () => {
    // const [{songPlaying, discover_weekly}, dispatch] = useDataLayerValue()
    // const songList = discover_weekly.tracks.items
    // const _songPlaying = songList.find(item => item.track.id === songPlaying)
    // console.log("song playing data", _songPlaying)
    const [volume, setVolume] = useState(100)
    const [{trackIndex}, dispatch] = useDataLayerValue()
    const sliderChange = (e,val) => {
        console.log("hmmm",val)
        setVolume(val)
    }

    


    const [isPlaying, setIsPlaying] = useState(false)
    const audioSrc = trackIndex?`${baseURL}/${trackIndex.audioFile}`:""
    const audioRef = useRef(new Audio(audioSrc));
    const [trackProgress, setTrackProgress] = useState("");
    const intervalRef = useRef();
    
    useEffect(() => {
        console.log("Thong tin tu footer ne cau 🧚‍♂️🧚‍♂️🧚‍♂️", {trackIndex})
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        trackIndex && setIsPlaying(true);
        startTimer();
        }, [trackIndex]);

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        console.log({isPlaying},{audioSrc})
      }, [isPlaying]);

    const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
        setTrackProgress(audioRef.current.currentTime);
    }, 1000);
    };

    const onChangeTrackProgress = (event) => {
        setTrackProgress(event.target.value);
        audioRef.current.currentTime = event.target.value;
      };
   
    return (
        <div className='footer'>
            <div className="footer_left">
            {trackIndex?
            <div className="songData">
                <img
                    className='songAvt' 
                    src={`${baseURL}/${trackIndex.avatar}`} alt="" />
                <div className="songInfo">
                    <div className="title">{trackIndex.title}</div> 
                    <div className="artist">{trackIndex.artist}</div>
                </div>
            </div>
            :<div className='songData'>No audio choosed</div>}
                    <FavoriteIcon></FavoriteIcon>
            </div>


            <div className="footer_center">
                <div className="controlButton">
                    <div className="shuffle"><ShuffleIcon/></div>
                    <div className="skipPrevious"><SkipPreviousIcon/></div>
                    <div className="play_plause" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying?
                        <PauseIcon/>
                    :
                        <PlayArrowIcon/>
                    }
                    </div>
                    <div className="skipNext"><SkipNextIcon/></div>
                    <div className="repeat"><RepeatIcon/></div>
                </div>
                <div className="center_slider">
                <input className='progressSlider' type="range" min={'0'} max={audioRef.current.duration} value={trackProgress} onChange={onChangeTrackProgress}/>
                </div>
            </div>
            <div className="footer_right">
                <InfoIcon className='infoIcon'/>
                <VolumeIcon volume={volume}/>
                <div className="slider">
                    <Slider 
                        onChange={(e,val) => sliderChange(e,val)}
                        size="small"
                        defaultValue={10}
                        aria-label="Small" 
                        className="volume-slideBar p-10"  
                        color="secondary"  
                    />
                </div>
                        
                <Grid/>
            </div>
            
        </div>
    );
};

export default Footer;