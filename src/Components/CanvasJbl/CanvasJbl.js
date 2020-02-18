import React, {useContext} from 'react';
import MainJbl from '../MainJbl';
import LevelOne from '../LevelOne';
import {Context} from '../../context';
import './CanvasJbl.css';

function CanvasJbl({globalWidth, lavel, roomcount1, displayBtnTVOff, columnOn, room1Finish, showMainMsg, showRoomMainMsg, messages}) {

    const {onHideMainMsg} = useContext(Context);

    const containerStyle = {
        width: globalWidth,
        height: globalWidth/1.62454874
    }

    const messageStyle = {
        width: '36.666em',
        height: '18.291em',
    }

    const cls = ['canvas-jbl'];
    cls.push(lavel);

    const clsMsg = ['main-message']
    if(showMainMsg) {
        clsMsg.push('show')
    }
    return (
        <div className={cls.join(' ')}>
            <div className="jbl-container" style={containerStyle}>
                <MainJbl />
                <LevelOne
                    roomCount={roomcount1}
                    displayBtnTVOff={displayBtnTVOff}
                    columnOn={columnOn}
                    room1Finish={room1Finish}
                    showMainMsg={showMainMsg}
                    showRoomMainMsg={showRoomMainMsg}
                    messages={messages}
                />
            </div>
            <div className={clsMsg.join(' ')}>
                <span style={messageStyle}>
                    <button onClick={(e) => onHideMainMsg(e)}></button>
                </span>
            </div>
        </div>
    )
}

export default CanvasJbl;