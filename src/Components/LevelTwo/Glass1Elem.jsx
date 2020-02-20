import React, { useEffect } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';

const Glass1Elem = () => {

  const nameElem = 'glass-1';

  useEffect(() => {
    document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
  })

  const styles = {
    top: '33.9%',
    left: '48.4%',
    width: '2.125em',
    height: '3.5em',
    position: 'absolute',
  }

  const landedOn = (e) => {
    document.getElementById(e.name).classList.add('dnd')
    let areaLeft = document.querySelector('.level-two-jbl').getBoundingClientRect().left;
    let elemLeft = parseInt(document.querySelector('#' +e.name+ ' .ddcontainerghost').style.left)
    let areaWidth = document.querySelector('.level-two-jbl').offsetWidth
    let elemWidth = document.querySelector('#' +e.name+ ' .ddcontainerghost > div').offsetWidth
    let areaTop = document.querySelector('.level-two-jbl').getBoundingClientRect().top;
    let elemTop = parseInt(document.querySelector('#' +e.name+ ' .ddcontainerghost').style.top)
    let areaHeight = document.querySelector('.level-two-jbl').offsetHeight
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
        targetKey="glasses"
        dragData={{name: nameElem }}
        onDrag={(e) => landedOn(e)}
        onDragEnd={(e) => landedEnd(e)}
      >
        
        <div style={styles}>
            <svg viewBox="0 0 51 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.43984 80.0367L0.745118 6.01952C16.925 9.83385 33.7927 9.79519 49.9628 5.91407L41.4631 79.9681C30.8538 81.6023 20.0532 81.6261 9.43984 80.0367Z" stroke="black"/>
                <path d="M5.47878 7.3344C5.63351 7.35897 5.81928 7.38813 6.03325 7.42113C6.72921 7.52844 7.72382 7.67633 8.91975 7.83888C11.3107 8.16384 14.5106 8.54799 17.7394 8.78321C20.9748 9.01891 24.4921 9.0419 27.1958 9.0064C28.5488 8.98863 29.7002 8.95619 30.5138 8.92817C30.7937 8.91853 31.0336 8.90941 31.228 8.90159C30.9901 10.8769 30.0544 14.2737 26.0138 15.4949C22.1265 16.0403 20.6545 15.5767 19.773 15.0388C19.5421 14.8979 19.3406 14.7451 19.1327 14.5816C19.1021 14.5576 19.0712 14.5332 19.0398 14.5084C18.8634 14.369 18.6738 14.2191 18.471 14.0819C17.9692 13.7423 17.377 13.4713 16.4789 13.3901C15.2006 13.2746 14.4763 13.6859 13.78 14.0813C13.7381 14.1051 13.6962 14.1289 13.6544 14.1525C12.9652 14.5408 12.1903 14.9397 10.6226 14.9321C9.08866 14.8182 8.02052 14.4336 7.27311 13.9095C6.52751 13.3866 6.06626 12.7005 5.78538 11.922C5.27298 10.5017 5.36895 8.81928 5.47878 7.3344Z" fill="#FF4713" stroke="black"/>
                <path d="M8.97852 7.60815L13.5361 80.4906" stroke="black"/>
                <path d="M19.1307 8.94751L20.8512 81.2596" stroke="black"/>
                <path d="M50.3894 5.73794V5.73794C34.0508 2.46247 17.2239 2.46984 0.888149 5.75962L0.288696 5.88034" stroke="black"/>
                <path d="M41.8301 7.60815L37.2725 80.4906" stroke="black"/>
                <path d="M31.6777 8.94751L29.9573 81.2596" stroke="black"/>
            </svg>
        </div>
        </DragDropContainer>
    </span>
  )
}

export default Glass1Elem
