import React, { useEffect } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';

const DragElem3 = () => {

  const nameElem = 'ball-3';

  useEffect(() => {
    document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
  })

  const styles = {
    top: '58.7%',
    left: '38.9%',
    width: '5.66em',
    height: '4.625em',
    position: 'absolute',
  }

  const landedOn = (e) => {
    document.getElementById(e.name).classList.add('dnd')
    let areaLeft = document.querySelector('.level-one-jbl').getBoundingClientRect().left;
    let elemLeft = parseInt(document.querySelector('#' +e.name+ ' .ddcontainerghost').style.left)
    let areaWidth = document.querySelector('.level-one-jbl').offsetWidth
    let elemWidth = document.querySelector('#' +e.name+ ' .ddcontainerghost > div').offsetWidth
    let areaTop = document.querySelector('.level-one-jbl').getBoundingClientRect().top;
    let elemTop = parseInt(document.querySelector('#' +e.name+ ' .ddcontainerghost').style.top)
    let areaHeight = document.querySelector('.level-one-jbl').offsetHeight
    let elemHeight = document.querySelector('#' +e.name+ ' .ddcontainerghost > div').offsetHeight
    

    if(elemLeft <= areaLeft){
      document.querySelector('#' + e.name + ' .ddcontainerghost').style.left = areaLeft
    }

    if (elemLeft + elemWidth >= areaLeft + areaWidth) {
      document.querySelector('#' + e.name + ' .ddcontainerghost').style.left = areaLeft + areaWidth - elemWidth
    }

    if (elemTop <= areaTop) {
      document.querySelector('#' + e.name + ' .ddcontainerghost').style.top = areaTop
    }

    if(elemTop + elemHeight >= areaTop + areaHeight) {
      document.querySelector('#' + e.name + ' .ddcontainerghost').style.top = areaTop + areaHeight - elemHeight
    }
  }

  const landedEnd = (e) => {
    document.getElementById(e.name).classList.remove('dnd')
  }

  return (
    <span style={styles} id={nameElem}>
      <DragDropContainer
        targetKey="balls"
        dragData={{name: nameElem }}
        onDrag={(e) => landedOn(e)}
        onDragEnd={(e) => landedEnd(e)}
      >
        
    <div style={styles}>
    <svg viewBox="0 0 136 111" fill="none" xmlns="http://www.w3.org/2000/svg" id="ball-3">
            <path d="M47.2661 105.277L45.5326 103.822L43.2662 102.013L42.6249 101.567L41.4332 100.567L48.244 94.8339L51.5939 97.553L47.2661 105.277Z" fill="#FF4713" stroke="black" strokeMiterlimit="10"/>
            <path d="M119.511 79.8593C102.599 100.566 65.4076 114.225 46.3566 98.4203C27.2149 82.7247 33.3556 43.4678 50.2769 22.861C67.1892 2.15439 96.414 -1.84803 115.556 13.8476C134.706 29.643 136.424 59.1527 119.511 79.8593Z" fill="#FF4713" stroke="black" strokeMiterlimit="10"/>
            <path d="M45.6031 97.9457C42.154 94.9054 33.7153 89.5642 27.5526 92.5207C19.8493 96.2165 15.7796 95.6095 15.467 92.0879C15.069 87.6056 9.55798 82.0713 6.65817 83.3327" stroke="black"/>
            <path d="M51.2803 37.5527C51.4574 39.5479 53.191 41.0028 55.1807 40.8262C57.1705 40.6495 58.6205 38.912 58.4434 36.9167C58.2662 34.9214 56.5327 33.4665 54.543 33.6432C52.6527 33.811 51.1031 35.5574 51.2803 37.5527Z" fill="#FF6539" stroke="black" strokeMiterlimit="10"/>
            <path d="M77.4245 27.0869C69.7489 30.986 63.1166 33.0831 61.3055 29.6241C59.6026 26.2561 63.433 18.5758 71.0997 14.577C78.7753 10.6779 87.2187 12.0398 88.9215 15.4079C90.6421 18.9755 85.1 23.1879 77.4245 27.0869Z" fill="#FF6539" stroke="black" strokeMiterlimit="10"/>
        </svg>
    </div>
</DragDropContainer>
    </span>
  )
}

export default DragElem3
