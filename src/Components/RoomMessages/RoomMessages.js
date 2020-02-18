import React, { useContext } from 'react'
import ReactAddonsCSSTransitionGroup from 'react-addons-css-transition-group'
import './RoomMessages.css'
import { Context } from '../../context';

function RoomMessages({ msgState }) {

    const { chengeStateMessage } = useContext(Context);

    let clx = msgState ? msgState : 'msg'
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
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={100}
        >
            <div key={clx} className="room-messages" ></div>
        </ReactAddonsCSSTransitionGroup>
    )
}

export default RoomMessages