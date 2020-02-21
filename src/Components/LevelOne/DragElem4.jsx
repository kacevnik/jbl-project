import React, { useEffect } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';

const DragElem4 = () => {

  const nameElem = 'ball-4';

  useEffect(() => {
    document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
  })

  const styles = {
    top: '80.5%',
    left: '82.1%',
    width: '6.375em',
    height: '5.583em',
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
        dragElemOpacity={1}
      >
        
    <div style={styles}>
    <svg viewBox="0 0 153 134" fill="none" xmlns="http://www.w3.org/2000/svg" id="ball-4">
            <path d="M38.3204 105.158L37.2778 103.15L35.8792 100.609L35.4581 99.951L34.7413 98.5701L43.2305 95.8894L45.2806 99.6856L38.3204 105.158Z" fill="#FFF480" stroke="black" strokeMiterlimit="10"/>
            <path d="M114.789 109.405C91.2261 122.038 51.6405 120.381 40.1115 98.477C28.4571 76.6383 49.1901 42.7421 72.7228 30.2049C96.2855 17.5721 124.809 25.0892 136.464 46.9279C148.088 68.8621 138.352 96.7722 114.789 109.405Z" fill="#FFF480" stroke="black" strokeMiterlimit="10"/>
            <path d="M39.5979 97.7496C37.5793 93.6187 31.8358 85.4484 25.0104 85.8142C16.4786 86.2714 12.9533 84.1494 14.0158 80.7773C15.3681 76.4854 12.4023 69.2602 9.24043 69.3124" stroke="black"/>
            <path d="M68.0124 44.1573C67.4104 46.0678 68.4531 48.0765 70.3583 48.6768C72.2636 49.2771 74.2693 48.2289 74.8713 46.3184C75.4733 44.4078 74.4307 42.3992 72.5254 41.7989C70.7154 41.2286 68.6144 42.2467 68.0124 44.1573Z" fill="#FFF9B8" stroke="black" strokeMiterlimit="10"/>
            <path d="M96.1712 44.5236C87.587 45.1792 80.6577 44.5711 80.3123 40.6819C80.0321 36.9183 86.5161 31.2955 95.1303 30.5444C103.714 29.8887 110.989 34.386 111.269 38.1496C111.489 42.1043 104.755 43.8679 96.1712 44.5236Z" fill="#FFF9B8" stroke="black" strokeMiterlimit="10"/>
        </svg>
    </div>
</DragDropContainer>
    </span>
  )
}

export default DragElem4
