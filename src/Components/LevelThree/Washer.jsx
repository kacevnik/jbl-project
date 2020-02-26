import React, { useContext } from 'react'
import { Context } from '../../context';

const Washer = ({hintRotateElem}) => {

    const { onBtnWasher } = useContext(Context);

    const id = 'btn-washer'
    let cls = []
  
    if(hintRotateElem === id) {
      cls.push('dnd shake shake-rotate')
    }

    const styles = {
        top: '44.8%',
        left: '89.4%',
        width: '1.791666666em',
        height: '1.791666666em',
        position: 'absolute',
    }

    return (
        <div style={styles} id={id} onClick={() => onBtnWasher()} className={cls.join(' ')}>
            <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21.732" cy="21.509" r="20.7517" transform="rotate(-0.00868784 21.732 21.509)" fill="#E8E8E8" stroke="black" />
                <circle cx="21.732" cy="21.509" r="12.8861" transform="rotate(-0.00868784 21.732 21.509)" fill="#FF4713" stroke="black" />
            </svg>
        </div>

    )
}
export default Washer
