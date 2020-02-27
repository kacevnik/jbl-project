import React,{useContext, useEffect, useState} from 'react'
import './BtnArrow.css'
import {Context} from '../../context';

const BtnArrow = () => {
    const [cls, setCls] = useState(['btn-arrow'])
    const {changeLevel} = useContext(Context);
    useEffect(()=>{
        if(cls.length === 1){
            setInterval(()=>{
                setCls([...cls, 'anime'])
            }, 5000)
        }
    })

    return(
        <div className={cls.join(' ')} onClick={() => changeLevel()}></div>
    )
}

export default BtnArrow