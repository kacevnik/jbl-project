import React,{useContext} from 'react'
import './RoomMessages.css'
import {Context} from '../../context';

function RoomMessages({msgState}) {

    const {chengeStateMessage} = useContext(Context);
    
    let clx = ['room-messages']
    if(msgState){
        clx.push(msgState)
        const timer = setTimeout(function(){
            chengeStateMessage(false)
        }, 5000)
        clearTimeout(timer);
    }

    return(
        <div className={clx.join(' ')} ></div>
    )
}

export default RoomMessages