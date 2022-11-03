import './style.css'

import React from 'react';
import { baseURL } from '../../../config';
import { useDataLayerValue } from '../../DataLayer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const SongRow = ({item, index}) => {
    const [{}, dispatch] = useDataLayerValue()
    const handleClick =  () =>{

    }
    return (
        <div className='songRow' 
            onClick={()=>dispatch({
                type: "SET_TRACKINDEX",
                trackIndex: item,
        })}>  
            <div className="index" id="">{index+1}</div>
            <div className="songData">
                <img
                    className='songAvt' 
                    src={`${baseURL}/${item.avatar}`} alt="" />
                <div className="songInfo">
                    <div className="title">{item.title}</div> 
                    <div className="artist">{item.artist}</div>
                </div>
            </div>
            <div className="album"></div>
            <div className="uploadDate">../../..</div>
            <div className="moreInfo" onClick={handleClick}><MoreHorizIcon></MoreHorizIcon></div>
            <div className="overlay"></div>
        </div>
    );
};

export default SongRow;