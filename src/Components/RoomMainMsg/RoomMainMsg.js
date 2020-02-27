import React, { useState, useEffect } from 'react'
import './RoomMainMsg.css'

function RoomMainMsg({ room }) {

    const [cls, setCls] = useState(['room-main-msg ' + room ])

    useEffect(()=>{
        if(cls.length === 1){
            setTimeout(()=>{
                setCls([...cls, 'hide'])
            }, 5000)
        }
    })
    return (
        <div className={cls.join(' ')}>

        </div>
    )
}

export default RoomMainMsg