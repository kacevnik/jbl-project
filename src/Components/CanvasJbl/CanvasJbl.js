import React, { useContext } from 'react';
import MainJbl from '../MainJbl';
import LevelOne from '../LevelOne';
import { Context } from '../../context';
import './CanvasJbl.css';
import LevelTwo from '../LevelTwo';
import LevelThree from '../LevelThree';
import RoomMessages from '../RoomMessages'

function CanvasJbl({ globalWidth, level, roomcount1, roomcount2, roomcount3, displayBtnTVOff, columnOn, room1Finish, showMainMsg, showRoomMainMsg, messages, hidePuddle, room2BgColumn, room2BgCheptos, soundApp }) {

    const { onHideMainMsg } = useContext(Context);

    const containerStyle = {
        width: globalWidth,
        height: globalWidth / 1.62454874
    }

    const messageStyle = {
        width: '36.666em',
        height: '18.291em',
    }

    const cls = ['canvas-jbl'];
    cls.push(level);

    const clsMsg = ['main-message']
    if (showMainMsg) {
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
                    soundApp={soundApp}
                />
                <LevelTwo
                    showMainMsg={showMainMsg}
                    roomCount={roomcount1}
                    roomCount2={roomcount2}
                    showRoomMainMsg={showRoomMainMsg}
                    hidePuddle={hidePuddle}
                    room2BgColumn={room2BgColumn}
                    room2BgCheptos={room2BgCheptos}
                    soundApp={soundApp}
                >
                </LevelTwo>
                <LevelThree
                    showMainMsg={showMainMsg}
                    roomCount={roomcount1}
                    roomCount2={roomcount2}
                    roomCount3={roomcount3}
                    showRoomMainMsg={showRoomMainMsg}
                >
                </LevelThree>
                <RoomMessages msgState={messages} />
            </div>
            <div className={clsMsg.join(' ')}>
                <span style={messageStyle}>
                    <div id="main-message-btn" onClick={(e) => onHideMainMsg(e)}></div>
                </span>
            </div>
        </div>
    )
}

export default CanvasJbl;