import React, { useContext } from 'react'
import { Context } from '../../context';

const BtnLight = () => {

  const { btnLightOff } = useContext(Context);

  const styles = {
    top: '42.1%',
    left: '77.6%',
    width: '1.666em',
    height: '1.416em',
    position: 'absolute',
  }

  return (
    <div style={styles} id='btn-light' onClick={() => btnLightOff()}>
      <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.04809 1.9168C7.17956 1.20558 7.79983 0.689453 8.5231 0.689453H37.4553C38.393 0.689453 39.1008 1.54009 38.9303 2.46211L33.5696 31.4621C33.4382 32.1733 32.8179 32.6895 32.0946 32.6895H3.16238C2.22473 32.6895 1.51693 31.8388 1.68737 30.9168L7.04809 1.9168Z" fill="#EDEDED" stroke="black" />
        <path d="M18.4527 16.6895L17.5527 25.6895H22.5478L23.4478 16.6895H18.4527Z" fill="#EDEDED" stroke="black" />
        <rect x="0.5" y="-0.5" width="5" height="9" transform="matrix(1 0 0 -1 18 16.1895)" fill="#BCBCBC" stroke="black" />
      </svg>
    </div>

  )
}
export default BtnLight
