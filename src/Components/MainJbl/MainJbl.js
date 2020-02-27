import React, {useEffect, useContext} from 'react';
import {Context} from '../../context';
import Parallax from 'parallax-js';
import './MainJbl.css';

function MainJbl() {

    useEffect(() => {
        new Parallax(document.getElementById('scene'));
    });

    const {changeLevel} = useContext(Context);

    return (
        <div className="main-jbl">
            <div className="main-jbl-scene" id="scene">
                <div className="main-jbl-first" data-depth="0"></div>
                <div className="main-jbl-second" data-depth="0.1"></div>
            </div>
            <div id="main-jbl-btn" onClick={() => changeLevel()}></div>
            <a href="https://ru.jbl.com/JBL+PULSE+4.html?utm_source=medialeaks&utm_medium=sp&utm_campaign=pulse4" className="jbl-pulse-4" target="_blank" rel="noopener noreferrer">JBL Pulse 4</a>
        </div>

    )
}

export default MainJbl;