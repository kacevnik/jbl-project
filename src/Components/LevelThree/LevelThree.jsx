import React from 'react';
import './LevelThree.css';
import RoomMainMsg from '../RoomMainMsg'
import BtnShowRules from '../BtnShowRules'
import BtnShowHint from '../BtnShowHint'
import BtnNextLevel from '../BtnNextLevel'

function RoomPanel({ roomCount }) {
    const arrElem = [false, false, false, false, false]
    const resArrEll = arrElem.map((el, idx) => {
        let cls = ['room-1-panel-elem']
        if (idx + 1 <= roomCount) {
            cls.push('show')
        }
        return (
            <div key={idx} className={cls.join(' ')}></div>
        )
    })
    return (

        <div className="room-1-panel">
            {resArrEll}
        </div>
    )
}

function RoomPanel2({ roomCount2 }) {
    const arrElem = [false, false, false, false]
    const resArrEll = arrElem.map((el, idx) => {
        let cls = ['room-2-panel-elem']
        if (idx + 1 <= roomCount2) {
            cls.push('show')
        }
        return (
            <div key={idx} className={cls.join(' ')}></div>
        )
    })
    return (

        <div className="room-2-panel">
            {resArrEll}
        </div>
    )
}

function RoomPanel3({ roomCount }) {
    const arrElem = [false, false, false]
    const resArrEll = arrElem.map((el, idx) => {
        let cls = ['room-3-panel-elem']
        if (idx + 1 <= roomCount) {
            cls.push('show')
        }
        return (
            <div key={idx} className={cls.join(' ')}></div>
        )
    })
    return (

        <div className="room-3-panel">
            {resArrEll}
        </div>
    )
}

function LevelTree({ roomCount, roomCount2, roomCount3, showRoomMainMsg }) {

    return (
        <div className="level-three-jbl">
            <RoomPanel roomCount={roomCount} />
            <RoomPanel2 roomCount={roomCount2} />
            <RoomPanel3 roomCount={roomCount3} />
            <div className="room3-counter">{roomCount3}/5</div>
            <RoomMainMsg show={showRoomMainMsg} room={'room-3-msg'} />
            <BtnShowRules />
            <BtnShowHint />
            <BtnNextLevel />
        </div>
    )
}

export default LevelTree;