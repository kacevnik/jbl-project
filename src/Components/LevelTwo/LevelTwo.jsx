import React, { useContext } from 'react';
import './LevelTwo.css';
import { Context } from '../../context';
import { DropTarget } from 'react-drag-drop-container';
import RoomMainMsg from '../RoomMainMsg'
import BtnShowRules from '../BtnShowRules'
import BtnShowHint from '../BtnShowHint'
import BtnSound from '../BtnSound'
import BtnNextLevel from '../BtnNextLevel'
import MopElem from './MopElem'
import Glass1Elem from './Glass1Elem'
import Glass1ElemClone from './Glass1ElemClone'
import Glass2Elem from './Glass2Elem'
import Glass2ElemClone from './Glass2ElemClone'
import MopElemClone from './MopElemClone'
import ColumnElem from './ColumnElem'
import Cheptos from './Cheptos'
import PuddleElem from './PuddleElem'
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

function GollArea3() {
    const { onHidePuddle } = useContext(Context);

    const dropped = (e) => {

        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        document.getElementById(e.dragData.name + '-clone').style.display = 'block'
        parent.classList.remove('dnd')
        onHidePuddle('msg-6')

    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return (
        <div className="goal-area-3">
            <DropTarget targetKey="mop" onHit={(e) => dropped(e)} onDragEnter={(e) => dragenter(e)} onDragLeave={(e) => dragleave(e)}>
                <div style={{ width: '100%', height: '100%' }}></div>
            </DropTarget>
        </div>
    )
}

function GollArea4({ roomCount2 }) {
    const { chengeRoom2BgColumn } = useContext(Context);

    const dropped = (e) => {

        const parent = e.containerElem.parentNode;
        if (roomCount2 === 3) {
            parent.style.display = 'none'
            parent.classList.remove('dnd')
        }

        chengeRoom2BgColumn('msg-7')

    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return (
        <div className="goal-area-4">
            <DropTarget targetKey="column-elem" onHit={(e) => dropped(e)} onDragEnter={(e) => dragenter(e)} onDragLeave={(e) => dragleave(e)}>
                <div style={{ width: '100%', height: '100%' }}></div>
            </DropTarget>
        </div>
    )
}

function GollArea5() {
    const { chengeCoutnGlasses } = useContext(Context);

    const dropped = (e) => {

        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        document.getElementById(e.dragData.name + '-clone').style.display = 'block'
        parent.classList.remove('dnd')

        chengeCoutnGlasses()

    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return (
        <div className="goal-area-5">
            <DropTarget targetKey="glasses" onHit={(e) => dropped(e)} onDragEnter={(e) => dragenter(e)} onDragLeave={(e) => dragleave(e)}>
                <div style={{ width: '100%', height: '100%' }}></div>
            </DropTarget>
        </div>
    )
}
function GollArea6() {
    const { chengeRoom2BgCheptos } = useContext(Context);
    const dropped = (e) => {
        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        parent.classList.remove('dnd')
        chengeRoom2BgCheptos('msg-9')

    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return (
        <div className="goal-area-6">
            <DropTarget targetKey="cheptos" onHit={(e) => dropped(e)} onDragEnter={(e) => dragenter(e)} onDragLeave={(e) => dragleave(e)}>
                <div style={{ width: '100%', height: '100%' }}></div>
            </DropTarget>
        </div>
    )
}

function LevelTwo({ roomCount, roomCount2, showRoomMainMsg, hidePuddle, room2BgColumn, room2BgCheptos, soundApp, soundAppAnime, hintRotateElem }) {

    let cls = ['level-two-jbl']

    if (room2BgCheptos) {
        cls.push('cheptos-bg')
    }

    if (room2BgColumn) {
        cls.push('column-bg')
    }

    return (
        <div className={cls.join(' ')}>
            <GollArea3 />
            <GollArea4 roomCount2={roomCount2} />
            <GollArea5 />
            <GollArea6 />
            <RoomPanel roomCount={roomCount} />
            <RoomPanel2 roomCount={roomCount2} />
            <div className="room2-counter">{roomCount2}/4</div>
            {showRoomMainMsg ? (<RoomMainMsg room={'room-2-msg'} />) : ('')}
            <MopElem name="mop" hintRotateElem={hintRotateElem}/>
            <Glass1Elem name="glass-1" hintRotateElem={hintRotateElem}/>
            <Glass2Elem name="glass-2" hintRotateElem={hintRotateElem}/>
            <ColumnElem hintRotateElem={hintRotateElem}/>
            <Cheptos name="cheptos" hintRotateElem={hintRotateElem}/>
            {hidePuddle ? ('') : (<PuddleElem />)}
            <BtnShowRules />
            <BtnShowHint />
            <BtnSound soundApp={soundApp} soundAppAnime={soundAppAnime} />
            <BtnNextLevel />
            <MopElemClone />
            <Glass1ElemClone />
            <Glass2ElemClone />
            {!room2BgColumn ? ('') : (<BtnArrow />)}
        </div>
    )
}

export default LevelTwo;