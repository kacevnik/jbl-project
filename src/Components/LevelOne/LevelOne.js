import React from 'react';
import './LevelOne.css';
import DragELem from './DragElem'
import DragELem2 from './DragElem2'
import DragELem3 from './DragElem3'
import DragELem4 from './DragElem4'
import DragELem5 from './DragElem5'
import DragELem6 from './DragElem6'
import DragELem7 from './DragElem7'
import BtnLight from './BtnLight'
import Column from './Column'
import RoomMainMsg from '../RoomMainMsg'
import ColumnOn from './ColumnOn'
import BtnShowRules from '../BtnShowRules'
import RoomMessages from '../RoomMessages'

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

function GollArea(){
    return(

        <div className="goal-area"></div>
    )
}

function GollArea2(){
    return(

        <div className="goal-area-2"></div>
    )
}

function LevelOne({roomCount, displayBtnTVOff, columnOn, room1Finish, showRoomMainMsg, messages}) {

    let btn = <DragELem7 name="btn-on-off" />
    let light = <BtnLight name="btn-off-ligth"/>
    let column = <Column name="column-level-1"/>
    let cls = ['level-one-jbl']

    if(!displayBtnTVOff){
        btn = ''
        cls.push('tv-off')
    }

    if(room1Finish){
        btn = ''
        light = ''
        cls.push('room-finish')
    }
    
    if (columnOn){
        if (room1Finish) {
            column = ''
        } else {
            column  = <ColumnOn name="column-level-1"/>
        }
    }

    return (
        <div className={cls.join(' ')}>
            <RoomPanel roomCount={roomCount}/>
            <div className="room1-counter">{roomCount}/5</div>
            <RoomMainMsg show={showRoomMainMsg} room={'room-1-msg'}/>
            {room1Finish ? ('') : (<GollArea />)}
            {room1Finish ? ('') : (<GollArea2 />)}
            {room1Finish ? ('') : (<DragELem name="ball-1" />)}
            {room1Finish ? ('') : (<DragELem2 name="ball-2" />)}
            {room1Finish ? ('') : (<DragELem3 name="ball-3" />)}
            {room1Finish ? ('') : (<DragELem4 name="ball-4" />)}
            {room1Finish ? ('') : (<DragELem5 name="ball-5" />)}
            {room1Finish ? ('') : (<DragELem6 name="vaza" /> )}
            {btn}
            {light}
            {column}
            <BtnShowRules />
            <RoomMessages msgState={messages}/>
        </div>
    )
}

export default LevelOne;