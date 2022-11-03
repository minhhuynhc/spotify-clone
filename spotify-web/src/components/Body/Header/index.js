import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import './style.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Header = () => {
    const [{user}, dispatch] = useDataLayerValue()
    return (
        
        <div className="header">
        {user? console.log("😁", user.images[0].url) : console.log("nothing hereeeeee")}
            <div className="button">
                <ArrowBackIosIcon/>
                <ArrowForwardIosIcon/>
            </div>
            
            {user ?
            <div className="userInfo">
                <img src={user.images[0].url} className="avt" alt="" />
                <div className="userName">{user.display_name}</div>
            </div>
                :
            <div className=""></div>
            }

            </div>
    );
};

export default Header;