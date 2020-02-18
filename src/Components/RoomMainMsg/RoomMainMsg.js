import React from 'react'
import './RoomMainMsg.css'

function RoomMainMsg({room, show}) {

    let cls = ['room-main-msg']
    cls.push(room)
    if(show) {
        cls.push('show')
    }

    
    return(
        <div className={cls.join(' ')}>

        </div>
    )
}

export default RoomMainMsg