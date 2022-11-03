import React from 'react';
import Favorite from '@mui/icons-material/Favorite';

const LikedSong = () => {
    return (
            <div className="likedSong">
                <div className="iconBox">
                    <div className="icon"><Favorite/></div>
                </div>
                Liked Song
            </div>
    );
};

export default LikedSong;