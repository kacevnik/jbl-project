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
            <div className="main-jbl-wrap">
                <button onClick={() => changeLevel('level-1')}>Начать веселье</button>
            </div>
        </div>

    )
}

export default MainJbl;