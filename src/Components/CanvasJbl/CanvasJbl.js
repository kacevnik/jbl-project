import React, { useContext } from 'react';
import MainJbl from '../MainJbl';
import LevelOne from '../LevelOne';
import { Context } from '../../context';
import './CanvasJbl.css';
import LevelTwo from '../LevelTwo';
import LevelThree from '../LevelThree';
import Final from '../Final';
import TurnScreen from '../TurnScreen';
import RoomMessages from '../RoomMessages'

function CanvasJbl({ globalWidth, level, roomcount1, roomcount2, roomcount3, displayBtnTVOff, columnOn, room1Finish, showMainMsg, showRoomMainMsg, messages, hidePuddle, room2BgColumn, room2BgCheptos, soundApp, room3Finish, hideWater, countAllAns, turnScreen, soundAppAnime }) {

    const { onHideMainMsg } = useContext(Context);

    let sep = level === 'final' ? 1.06299212598 : 1.62454874

    const containerStyle = {
        width: globalWidth,
        height: globalWidth / sep
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
                    soundAppAnime={soundAppAnime}
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
                    soundAppAnime={soundAppAnime}
                >
                </LevelTwo>
                <LevelThree
                    showMainMsg={showMainMsg}
                    roomCount={roomcount1}
                    roomCount2={roomcount2}
                    roomCount3={roomcount3}
                    showRoomMainMsg={showRoomMainMsg}
                    soundApp={soundApp}
                    room3Finish={room3Finish}
                    hideWater={hideWater}
                    countAllAns={countAllAns}
                    soundAppAnime={soundAppAnime}
                >
                </LevelThree>
                <Final countAllAns={countAllAns}/>
                <RoomMessages msgState={messages} />
            </div>
            <div className={clsMsg.join(' ')}>
                <span style={messageStyle}>
                    <div id="main-message-btn" onClick={(e) => onHideMainMsg(e)}></div>
                </span>
            </div>
            {turnScreen ? (<TurnScreen />) : ('')}
        </div>
    )
}

export default CanvasJbl;