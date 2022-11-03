import React from 'react';
import Body from '../Body';
import Sidebar from '../Sidebar';
import './Homepage.css'
import NavBar from './NavBar';
import PlayingBar from './PlayingBar';
import TopBar from './TopBar';

const Homepage = () => {
    return (
        <div className='homepage'>
            <TopBar/>
            <div className='nav-bar'><NavBar/></div>
            <div className="layout"><Body/></div>
            <PlayingBar className="now-playing-bar"></PlayingBar>
        </div>
    );