import React from 'react'
import ReactAddonsCSSTransitionGroup from 'react-addons-css-transition-group'
import './RoomMessages.css'

function RoomMessages({ msgState }) {

    let clx = msgState ? msgState : 'msg'
    let entr = msgState ? true : false
    let elem = null
    if (msgState) {
        for (let i = 1; i < 20; i++) {
            elem = document.querySelector('.msg-' + i + '-enter-active')
            if (elem) {
                elem.style.display = 'none'
            }
        }

    }


    return (
        <ReactAddonsCSSTransitionGroup
            transitionName={clx}
            transitionEnter={entr}
            transitionLeave={entr}
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={100}
        >
            <div key={clx} className="room-messages" ></div>
        </ReactAddonsCSSTransitionGroup>
    )
}

export default RoomMessages