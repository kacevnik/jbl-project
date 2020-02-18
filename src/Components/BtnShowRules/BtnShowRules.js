import React,{useContext} from 'react'
import './BtnShowRules.css'
import {Context} from '../../context';

function BtnShowRules() {
    const {onBtnShowRules} = useContext(Context);
    return(
        <div className="btn-show-rules" onClick={onBtnShowRules}></div>
    )
}

export default BtnShowRules