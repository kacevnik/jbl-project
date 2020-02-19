import React, { useEffect } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';

const DragElem1 = () => {

  const nameElem = 'ball-1';

  useEffect(() => {
    document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
  })

  const styles = {
    top: '78%',
    left: '2%',
    width: '5.04166667em',
    height: '4.45833333em',
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
      <svg viewBox="0 0 121 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8025 84.6404L19.5068 81.0585L11.4176 84.365L12.2473 85.7511L12.7531 86.3791L14.3495 88.7566L15.5547 90.5891L21.8025 84.6404Z" fill="#4A4AD1" stroke="black" strokeMiterlimit="10"/>
        <path d="M107.275 26.1761C94.0656 5.70615 65.4579 0.525206 43.2849 14.6615C21.1118 28.7979 3.4391 63.4685 16.565 84.0528C29.6909 104.637 68.7819 103.098 90.856 88.9777C113.128 74.8257 120.385 46.6617 107.275 26.1761Z" fill="#4A4AD1" stroke="black" strokeMiterlimit="10"/>
        <path d="M44.0841 25.9847C45.9743 26.3935 47.1955 28.3247 46.7874 30.2104C46.3793 32.0962 44.4449 33.3132 42.5547 32.9045C40.6645 32.4957 39.4433 30.5645 39.8514 28.6787C40.2595 26.793 42.1939 25.576 44.0841 25.9847Z" fill="#4A6AD1" stroke="black" strokeMiterlimit="10"/>
        <path d="M81.8046 19.5995C81.2049 15.8487 73.7068 12.0777 65.3009 13.4095C56.8949 14.7414 50.9593 20.7421 51.559 24.4929C52.1587 28.2437 59.0728 28.3627 67.4787 27.0308C75.8689 25.6002 82.4043 23.3503 81.8046 19.5995Z" fill="#4A6AD1" stroke="black" strokeMiterlimit="10"/>
      </svg>
    </div>
</DragDropContainer>
    </span>
  )
}

export default DragElem1
