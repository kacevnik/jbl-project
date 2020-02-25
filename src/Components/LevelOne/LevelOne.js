import React, { useContext } from 'react';
import { Context } from '../../context';
import { DropTarget } from 'react-drag-drop-container';
import './LevelOne.css';
import DragELem from './DragElem'
import DragElemClone1 from './DragElemClone1'
import DragELem2 from './DragElem2'
import DragElemClone2 from './DragElemClone2'
import DragELem3 from './DragElem3'
import DragElemClone3 from './DragElemClone3'
import DragELem4 from './DragElem4'
import DragElemClone4 from './DragElemClone4'
import DragELem5 from './DragElem5'
import DragElemClone5 from './DragElemClone5'
import DragELem6 from './DragElem6'
import DragElemClone6 from './DragElemClone6'
import DragELem7 from './DragElem7'
import BtnLight from './BtnLight'
import Column from './Column'
import RoomMainMsg from '../RoomMainMsg'
import ColumnOn from './ColumnOn'
import BtnShowRules from '../BtnShowRules'
import BtnShowHint from '../BtnShowHint'
import BtnSound from '../BtnSound'
import BtnNextLevel from '../BtnNextLevel'
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

function GollArea() {

    const { counterBalls } = useContext(Context);

    const dropped = (e) => {

        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        document.getElementById(e.dragData.name + '-clone').style.display = 'block'
        parent.classList.remove('dnd')
        counterBalls()
    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return (
        <div className="goal-area">
            <DropTarget targetKey="balls" onHit={(e) => dropped(e)} onDragEnter={(e) => dragenter(e)} onDragLeave={(e) => dragleave(e)}>
                <div style={{ width: '100%', height: '100%' }}></div>
            </DropTarget>
        </div>
    )
}

function GollArea2() {

    const { chengeRoom1Count } = useContext(Context);

    const dropped = (e) => {
        console.log(e)
        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        document.getElementById(e.dragData.name + '-clone').style.display = 'block'
        parent.classList.remove('dnd')
        chengeRoom1Count('msg-1')
    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return (

        <div className="goal-area-2">
            <DropTarget targetKey="vaza" onHit={(e) => dropped(e)} onDragEnter={(e) => dragenter(e)} onDragLeave={(e) => dragleave(e)}>
                <div style={{ width: '100%', height: '100%' }}></div>
            </DropTarget>
        </div>
    )
}

function LevelOne({ roomCount, displayBtnTVOff, columnOn, room1Finish, showRoomMainMsg, soundApp,soundAppAnime }) {

    let btn = <DragELem7 name="btn-on-off" />
    let light = <BtnLight name="btn-off-ligth" />
    let column = <Column name="column-level-1" />
    let cls = ['level-one-jbl']

    if (!displayBtnTVOff) {
        btn = ''
        cls.push('tv-off')
    }

    if (room1Finish) {
        btn = ''
        light = ''
        cls.push('room-finish')
    }

    if (columnOn) {
        if (room1Finish) {
            column = ''
        } else {
            column = <ColumnOn name="column-level-1" />
        }
    }

    return (
        <div className={cls.join(' ')}>
            <RoomPanel roomCount={roomCount} />
            <div className="room1-counter">{roomCount}/5</div>
            <RoomMainMsg show={showRoomMainMsg} room={'room-1-msg'} />
            {room1Finish ? ('') : (<GollArea />)}
            {room1Finish ? ('') : (<GollArea2 />)}
            {room1Finish ? ('') : (<DragELem name="ball-1" />)}
            {room1Finish ? ('') : (<DragELem2 name="ball-2" />)}
            {room1Finish ? ('') : (<DragELem3 name="ball-3" />)}
            {room1Finish ? ('') : (<DragELem4 name="ball-4" />)}
            {room1Finish ? ('') : (<DragELem5 name="ball-5" />)}
            {room1Finish ? ('') : (<DragELem6 name="vaza" />)}
            {btn}
            {light}
            {column}
            <BtnShowRules />
            <BtnShowHint />
            <BtnSound soundApp={soundApp} soundAppAnime={soundAppAnime} />
            <BtnNextLevel />
            {room1Finish ? ('') : (<DragElemClone1 />)}
            {room1Finish ? ('') : (<DragElemClone2 />)}
            {room1Finish ? ('') : (<DragElemClone3 />)}
            {room1Finish ? ('') : (<DragElemClone4 />)}
            {room1Finish ? ('') : (<DragElemClone5 />)}
            {room1Finish ? ('') : (<DragElemClone6 />)}
            {!room1Finish ? ('') : (<BtnArrow />)}
        </div>
    )
}

export default LevelOne;