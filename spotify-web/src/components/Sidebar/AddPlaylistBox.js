import React from 'react';
import './style.css'

const AddPlaylistBox = ({status, handleAddBox}) => {
    return (
        <div className={`${status} addBox `}>
            <input className='' type="text" onChange={(e) => handleAddBox(e)}>
            </input>
            <button className='addBtt'>+</button>
        </div>
    );
};

export default AddPlaylistBox;