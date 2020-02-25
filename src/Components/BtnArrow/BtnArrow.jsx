import React,{useContext} from 'react'
import './BtnArrow.css'
import {Context} from '../../context';

function BtnArrow() {
    const {changeLevel} = useContext(Context);

    return(
        <div className="btn-arrow" onClick={() => changeLevel()}></div>
    )
}

export default BtnArrow