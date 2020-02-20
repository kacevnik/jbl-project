import React,{useContext} from 'react'
import './BtnNextLevel.css'
import {Context} from '../../context';

function BtnNextLevel() {
    const {changeLevel} = useContext(Context);

    return(
        <div className="btn-next-level" onClick={() => changeLevel()}></div>
    )
}

export default BtnNextLevel