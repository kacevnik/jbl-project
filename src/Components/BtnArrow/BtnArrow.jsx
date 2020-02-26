import React,{useContext} from 'react'
import './BtnArrow.css'
import {Context} from '../../context';
import {CSSTransitionGroup} from 'react-transition-group'

const BtnArrow = () => {
    const {changeLevel} = useContext(Context);

    return(
        <CSSTransitionGroup
        transitionName="arrow"
        transitionAppear={true}
        transitionAppearTimeout={5000}
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={10000}
        transitionLeaveTimeout={10000}
        >
            <div className="btn-arrow" key="arrow" onClick={() => changeLevel()}></div>
        </CSSTransitionGroup>
    )
}

export default BtnArrow