import React, { useContext } from 'react';
import { Context } from '../../context'
import { DropTarget } from 'react-drag-drop-container';
import './LevelThree.css';
import RoomMainMsg from '../RoomMainMsg'
import BtnShowRules from '../BtnShowRules'
import BtnShowHint from '../BtnShowHint'
import BtnNextLevel from '../BtnNextLevel'
import BtnSound from '../BtnSound'
import KeyElem from './KeyElem'
import KeyElemClone from './KeyElemClone'
import Paper from './Paper'
import PaperClone from './PaperClone'
import BtnWasher from './Washer'
import Water from './Water'
import BtnArrow from '../BtnArrow'

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

function RoomPanel2({ roomCount }) {
    const arrElem = [false, false, false, false]
    const resArrEll = arrElem.map((el, idx) => {
        let cls = ['room-2-panel-elem']
        if (idx + 1 <= roomCount) {
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

function GollArea7() {

    const { onKeyElemHendler } = useContext(Context);

    const dropped = (e) => {

        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        document.getElementById(e.dragData.name + '-clone').style.display = 'block'
        parent.classList.remove('dnd')
        onKeyElemHendler('msg-12')

    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return (
        <div className="goal-area-7">
            <DropTarget targetKey="key-elem" onHit={(e) => dropped(e)} onDragEnter={(e) => dragenter(e)} onDragLeave={(e) => dragleave(e)}>
                <div style={{ width: '100%', height: '100%' }}></div>
            </DropTarget>
        </div>
    )
}

function GollArea8() {

    const { chengeRoom3Count } = useContext(Context);

    const dropped = (e) => {

        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        document.getElementById(e.dragData.name + '-clone').style.display = 'block'
        parent.classList.remove('dnd')
        chengeRoom3Count('msg-13')

    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return (
        <div className="goal-area-8">
            <DropTarget targetKey="paper" onHit={(e) => dropped(e)} onDragEnter={(e) => dragenter(e)} onDragLeave={(e) => dragleave(e)}>
                <div style={{ width: '100%', height: '100%' }}></div>
            </DropTarget>
        </div>
    )
}

function LevelTree({ roomCount, roomCount2, roomCount3, showRoomMainMsg, soundApp, room3Finish, hideWater, countAllAns, soundAppAnime, hintRotateElem }) {

    let cls = ['level-three-jbl']
    if (room3Finish) {
        cls.push('washer')
    }

    let clsPanel = ['room-all-panel']
    if (countAllAns === 12) {
        clsPanel.push('all')
    }

    return (
        <div className={cls.join(' ')}>
            <div className={clsPanel.join(' ')}>
                <RoomPanel roomCount={roomCount} />
                <RoomPanel2 roomCount={roomCount2} />
                <RoomPanel3 roomCount={roomCount3} />
            </div>
            <div className="room3-counter">{roomCount3}/3</div>
            {showRoomMainMsg ? (<RoomMainMsg room={'room-3-msg'} />) : ('')}
            {hideWater ? ('') : (<Water />)}
            <BtnShowRules />
            <BtnShowHint />
            <BtnNextLevel />
            <BtnSound soundApp={soundApp} soundAppAnime={soundAppAnime}/>
            <GollArea7 />
            <GollArea8 />
            <KeyElem name="key-elem" hintRotateElem={hintRotateElem}/>
            <KeyElemClone />
            <Paper name="paper" hintRotateElem={hintRotateElem}/>
            {room3Finish ? ('') : (<BtnWasher hintRotateElem={hintRotateElem}/>)}
            {room3Finish ? ('') : (<PaperClone />)}
            {!room3Finish ? ('') : (<BtnArrow />)}
        </div>
    )
}

export default LevelTree;