import React from 'react';
import MainJbl from '../MainJbl';
import LevelOne from '../LevelOne';
import './CanvasJbl.css';

function CanvasJbl({globalWidth, lavel}) {
    const containerStyle = {
        width: globalWidth,
        height: globalWidth/1.62454874
    }
    const cls = ['canvas-jbl'];
    cls.push(lavel);
    return (
        <div className={cls.join(' ')}>
            <div className="jbl-container" style={containerStyle}>
                <MainJbl />
                <LevelOne />
            </div>
        </div>
    )
}

export default CanvasJbl;