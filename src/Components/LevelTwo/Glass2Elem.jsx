import React, { useEffect } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';

const Glass2Elem = () => {

  const nameElem = 'glass-2';

  useEffect(() => {
    document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
  })

  const styles = {
    top: '64.2%',
    left: '87.4%',
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
        dragElemOpacity={1}
      >
        
        <div style={styles}>
            <svg viewBox="0 0 52 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1698 79.8641L50.8645 5.84692C34.6847 9.66124 17.8169 9.62259 1.64677 5.74146L10.1466 79.7955C20.7558 81.4297 31.5564 81.4535 42.1698 79.8641Z" stroke="black"/>
                <path d="M46.1308 7.16179C45.9761 7.18637 45.7903 7.21553 45.5764 7.24852C44.8804 7.35583 43.8858 7.50372 42.6899 7.66627C40.299 7.99124 37.0991 8.37538 33.8702 8.6106C30.6349 8.8463 27.1175 8.86929 24.4138 8.83379C23.0608 8.81603 21.9094 8.78358 21.0959 8.75556C20.816 8.74592 20.576 8.7368 20.3816 8.72899C20.6195 10.7043 21.5552 14.1011 25.5958 15.3223C29.4831 15.8677 30.9552 15.4041 31.8366 14.8662C32.0675 14.7253 32.269 14.5725 32.4769 14.409C32.5075 14.385 32.5384 14.3606 32.5698 14.3358C32.7462 14.1964 32.9359 14.0465 33.1386 13.9093C33.6404 13.5697 34.2326 13.2987 35.1307 13.2175C36.4091 13.102 37.1333 13.5133 37.8296 13.9087C37.8716 13.9325 37.9134 13.9563 37.9553 13.9798C38.6444 14.3682 39.4193 14.7671 40.987 14.7595C42.521 14.6456 43.5891 14.261 44.3365 13.7369C45.0821 13.214 45.5434 12.5279 45.8242 11.7494C46.3366 10.3291 46.2407 8.64667 46.1308 7.16179Z" fill="#FF4713" stroke="black"/>
                <path d="M42.6311 7.43555L38.0735 80.318" stroke="black"/>
                <path d="M32.4788 8.7749L30.7584 81.087" stroke="black"/>
                <path d="M1.22025 5.56534V5.56534C17.5588 2.28986 34.3858 2.29723 50.7215 5.58701L51.3209 5.70774" stroke="black"/>
                <path d="M9.7796 7.43555L14.3372 80.318" stroke="black"/>
                <path d="M19.9319 8.7749L21.6523 81.087" stroke="black"/>
            </svg>
        </div>
        </DragDropContainer>
    </span>
  )
}

export default Glass2Elem
