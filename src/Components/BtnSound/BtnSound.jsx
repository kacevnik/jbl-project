import React, { useContext } from 'react'
import './BtnSound.css'
import { Context } from '../../context';

function BtnSound({ soundApp, soundAppAnime }) {
    const { onBtnSountd } = useContext(Context);
    const cls = ['btn-sound']
    if(soundAppAnime) {
        cls.push('shake shake-chunk shake-constant')
    }
    if (!soundApp) {
        cls.push('off')
    }
    return (
        <div className={cls.join(' ')} onClick={onBtnSountd}></div>
    )
}

export default BtnSound