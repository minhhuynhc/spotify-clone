import React from 'react';
import "./style.css"
const SidebarOption = ({option, Icon}) => {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className="sidebarOptionIcon"></Icon>}
            {Icon ? <p>{option}</p> : <p>{option}</p>}
        </div>
    );
};

export default SidebarOption;