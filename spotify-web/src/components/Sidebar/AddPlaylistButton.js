import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import './style.css'

const AddPlaylist = ({addPlaylist}) => {
    return (
        <div>
            <button className='addButton' onClick={addPlaylist}>
                <AddIcon/>
                <p className=''>Add playlist</p>
            </button>
        </div>
    );
};

export default AddPlaylist;