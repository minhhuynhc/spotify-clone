import React, { useContext, useState } from 'react';
import SidebarOption from '../SidebarOption';
import "./style.css"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayerValue } from '../DataLayer';
import AddIcon from '@mui/icons-material/Add';
import AddPlaylist from './AddPlaylistButton';
import AddplaylistBox from './AddPlaylistBox';
import AddPlaylistBox from './AddPlaylistBox';
import LikedSong from './LikedSong';

const Sidebar = () => {
    const [{playlist, listChoosing}, dispatch] = useDataLayerValue()
    const [status, setStatus] = useState(false)


    const handleDiscoveryOption = (e) =>{
        // console.log('clicked the dis option')
        // dispatch({
        //     type: "SET_LISTCHOOSING",
        //     listChoosing: e
        // })

    }
    const handleAddBox = (e) =>{
        console.log(e.target.value)
    }
    const addPlaylist = (name) => {
        console.log("you clicked the button")
        setStatus(!status)
        console.log(status)
    }
    return (
        <div className='sidebar plr-10'>
            <img 
            className='sidebar-logo'
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
            <SidebarOption option="Home" Icon={HomeOutlinedIcon}/>
            <SidebarOption option="Search" Icon={SearchOutlinedIcon}/>
            <SidebarOption option="Your Library" Icon={LibraryMusicOutlinedIcon}/>

            <div className="">
                <AddPlaylist addPlaylist = {addPlaylist}/>
                <LikedSong/> 
            </div>

            {/* <hr style={{opacity:0.8, color: 'gray'}}/> */}

            <AddPlaylistBox status = {status} handleAddBox={handleAddBox}>
            
            </AddPlaylistBox>

            {playlist?.item?.map( item => 
                <SidebarOption option={item}/>  
            )}

            <div className="discoveryOption option" onClick={handleDiscoveryOption()}>
            Discovery weekly
            </div>
            <div className="yourList option">
                Your list
            </div>
            
        </div>
    );
};

export default Sidebar;