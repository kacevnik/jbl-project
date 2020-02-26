import React, { useContext } from 'react'
import {Context} from '../../context';

const BtnTV = ({hintRotateElem}) => {

  const id = 'btn-on-off'
  const {btnTVOff} = useContext(Context);
  let cls = []

  if(hintRotateElem === id) {
    cls.push('dnd shake shake-rotate')
  }

  const styles = {
    top: '44%',
    left: '24.9%',
    width: '0.875em',
    height: '0.875em',
    position: 'absolute',
  }

  return (
    <div style={styles} id={id} onClick={() => btnTVOff('btn-4')} className={cls.join(' ')}>
        <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.3135" cy="10.8306" r="9.50104" fill="#2BB673" stroke="black"/>
            <path d="M13.8905 6.5498C15.1139 7.5731 15.892 9.11101 15.892 10.8307C15.892 13.9115 13.3944 16.4091 10.3135 16.4091C7.23266 16.4091 4.73511 13.9115 4.73511 10.8307C4.73511 9.11101 5.51322 7.5731 6.73657 6.5498" stroke="black"/>
            <path d="M10.4011 4.89844V11.4794" stroke="black"/>
        </svg>
    </div>

  )
}
export default BtnTV
