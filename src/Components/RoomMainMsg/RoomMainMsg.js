import React, { useState, useEffect, useContext } from 'react'
import './RoomMainMsg.css'
import {Context} from '../../context'

function RoomMainMsg({ room }) {

    const [cls, setCls] = useState(['room-main-msg ' + room ])
    const{setShowRoomMainMsg} = useContext(Context)

    useEffect(()=>{
        if(cls.length === 1){
            setTimeout(()=>{
                setCls([...cls, 'hide'])
                setShowRoomMainMsg(false)
            }, 5000)
        }
    })
    return (
        <div className={cls.join(' ')}>

        </div>
    )
}

export default RoomMainMsg