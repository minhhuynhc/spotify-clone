import React from 'react';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import './style.css'

const VolumeIcon = ({volume}) => {
    return (
        <div className='volumeIcon'>
            {volume > 50 ? 
                    (<VolumeUpIcon/>)
            :
            volume === 0 ? 
                    <VolumeMuteIcon/>
            :
                    <VolumeDownIcon/>
            }
            
        </div>
    );
};

export default VolumeIcon;