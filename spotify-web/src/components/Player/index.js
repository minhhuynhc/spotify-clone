import React, { useEffect, useState } from 'react';
import Body from '../Body';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import "./style.css";

const Player = ({spotify}) => {
    const [listChoosing, setListChoosing] = useState()
    const [trackIndex, setTrackIndex] = useState(-1)
    const handeleSelectTrack = (index) =>{
        setTrackIndex(index)
    }
    return (
        <div className='player'>
            <div className='player-body'>
                <Sidebar></Sidebar>
                <Body spotify ={spotify} trackIndex={trackIndex} handeleSelectTrack></Body>
            </div>
                <Footer trackIndex={trackIndex}></Footer>
        </div>
    );
};

export default Player;