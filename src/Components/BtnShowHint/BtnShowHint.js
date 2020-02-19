import React,{useContext} from 'react'
import './BtnShowHint.css'
import {Context} from '../../context';

function BtnShowHint() {
    const {ononBtnShowRules} = useContext(Context);
    return(
        <div className="btn-show-hint" onClick={ononBtnShowRules}></div>
    )
}

export default BtnShowHint