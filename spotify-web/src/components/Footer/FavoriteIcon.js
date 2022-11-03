import React, { useState } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const FavoriteIcon = () => {
    const [status, setStatus] = useState(false)
    return (
        <div className='fvrIcon' onClick={() =>  setStatus(!status)}>
            {!status ? <FavoriteBorderIcon/> : <Favorite/> }
        </div>
    );
};

export default FavoriteIcon;