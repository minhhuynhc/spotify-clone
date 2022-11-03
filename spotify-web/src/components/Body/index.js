import React from 'react';
import { baseURL } from '../../config';
import { useDataLayerValue } from '../DataLayer';
import { useSearchParams } from "react-router-dom"
import Header from './Header';
import SongRow from './SongRow';
import "./style.css"
const Body = ({spotify}) => {
    const [{discover_weekly, currentAudioList, appData}, dispatch] = useDataLayerValue()
    const playSong = (id) => {
        console.log("🐱‍🐉🐱‍🐉🐱‍🐉", id)
        dispatch({
            type: 'changeSongPlaying',
            songPlaying: id
        })
      };
    const renderSongs = (songs) => {
        return songs?songs.map((item, index) => (
            <SongRow item={item} index={index}/>
                )
            ):""
    }
    return (
        <div className='body'>
            <Header/>
            {console.log("👀👀",discover_weekly)}
            {console.log("😎😎😎😎😎😎😎😎",{appData})}
            <div className="songList_header">
                <div className="columnheader">#</div>
                <div className="columnheader">Title</div>
                <div className="columnheader">Album</div>
                <div className="columnheader">Upload Date</div>
            </div>
        {renderSongs(appData)}       
        </div>
          

    );
};

export default Body;