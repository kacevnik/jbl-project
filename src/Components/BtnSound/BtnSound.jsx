import React, { useContext } from 'react'
import './BtnSound.css'
import { Context } from '../../context';

function BtnSound({ soundApp }) {
    const { onBtnSountd } = useContext(Context);
    const cls = ['btn-sound']
    if (!soundApp) {
        cls.push('off')
    }
    return (
        <div className={cls.join(' ')} onClick={onBtnSountd}></div>
    )
}

export default BtnSound