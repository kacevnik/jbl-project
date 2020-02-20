import React, {useContext} from 'react';
import './LevelTwo.css';
import {Context} from '../../context';
import { DropTarget } from 'react-drag-drop-container';
import RoomMainMsg from '../RoomMainMsg'
import BtnShowRules from '../BtnShowRules'
import BtnShowHint from '../BtnShowHint'
import BtnNextLevel from '../BtnNextLevel'
import RoomMessages from '../RoomMessages'
import MopElem from './MopElem'
import Glass1Elem from './Glass1Elem'
import Glass1ElemClone from './Glass1ElemClone'
import Glass2Elem from './Glass2Elem'
import Glass2ElemClone from './Glass2ElemClone'
import MopElemClone from './MopElemClone'
import ColumnElem from './ColumnElem'
import PuddleElem from './PuddleElem'

function RoomPanel({roomCount}){
    const arrElem = [false, false, false, false, false]
    const resArrEll = arrElem.map((el, idx) => {
        let cls = ['room-1-panel-elem']
        if(idx + 1 <= roomCount ){
            cls.push('show')
        }
        return (
            <div key={idx} className={cls.join(' ')}></div>
        )
    })
    return(

        <div className="room-1-panel">
            {resArrEll}
        </div>
    )
}

function RoomPanel2({roomCount}){
    const arrElem = [false, false, false, false]
    const resArrEll = arrElem.map((el, idx) => {
        let cls = ['room-2-panel-elem']
        if(idx + 1 <= roomCount ){
            cls.push('show')
        }
        return (
            <div key={idx} className={cls.join(' ')}></div>
        )
    })
    return(

        <div className="room-2-panel">
            {resArrEll}
        </div>
    )
}

function GollArea3(){
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

    return(
        <div className="goal-area-3">
            <DropTarget targetKey="mop" onHit={(e)=>dropped(e) } onDragEnter={(e)=>dragenter(e)} onDragLeave={(e)=>dragleave(e)}>
                <div style={{width: '100%', height: '100%'}}></div>
            </DropTarget>
        </div>
    )
}

function GollArea4(){
    const { chengeRoom2BgColumn } = useContext(Context);

    const dropped = (e) => {

        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        parent.classList.remove('dnd')
        chengeRoom2BgColumn('msg-7')

    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return(
        <div className="goal-area-4">
            <DropTarget targetKey="column-elem" onHit={(e)=>dropped(e) } onDragEnter={(e)=>dragenter(e)} onDragLeave={(e)=>dragleave(e)}>
                <div style={{width: '100%', height: '100%'}}></div>
            </DropTarget>
        </div>
    )
}

function GollArea5(){
    const { chengeRoom2BgColumn } = useContext(Context);

    const dropped = (e) => {

        const parent = e.containerElem.parentNode;

        parent.style.display = 'none'
        document.getElementById(e.dragData.name + '-clone').style.display = 'block'
        parent.classList.remove('dnd')

    }

    const dragenter = (e) => {
        e.containerElem.parentNode.classList.add('dnd-goal');
    }

    const dragleave = (e) => {
        e.containerElem.parentNode.classList.remove('dnd-goal');
    }

    return(
        <div className="goal-area-5">
            <DropTarget targetKey="glasses" onHit={(e)=>dropped(e) } onDragEnter={(e)=>dragenter(e)} onDragLeave={(e)=>dragleave(e)}>
                <div style={{width: '100%', height: '100%'}}></div>
            </DropTarget>
        </div>
    )
}

function LevelTwo({roomCount, roomCount2, showRoomMainMsg, messages, hidePuddle, room2BgColumn}) {

    let cls = ['level-two-jbl']

    if(room2BgColumn){
        cls.push('column-bg')
    }

    return (
        <div className={cls.join(' ')}>
            <GollArea3 />
            <GollArea4 />
            <GollArea5 />
            <RoomPanel roomCount={roomCount}/>
            <RoomPanel2 roomCount={roomCount2}/>
            <div className="room2-counter">{roomCount2}/4</div>
            <RoomMainMsg show={showRoomMainMsg} room={'room-2-msg'}/>
            <MopElem name="mop"/>
            <Glass1Elem name="glass-1" />
            {/* <Glass2Elem name="glass-2" /> */}
            <ColumnElem />
            {hidePuddle ? ('') : (<PuddleElem />)}
            <BtnShowRules />
            <BtnShowHint />
            <BtnNextLevel />
            <MopElemClone />
            <Glass1ElemClone />
            {/* <Glass2ElemClone /> */}
            <RoomMessages msgState={messages}/>
        </div>
    )
}

export default LevelTwo;