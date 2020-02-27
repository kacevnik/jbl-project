import React, { useEffect, useContext } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';
import { Context } from '../../context';

const MopElem = ({hintRotateElem}) => {

  const { setHintRotateElem } = useContext(Context);

  const nameElem = 'mop';
  let cls = []

  if(hintRotateElem === nameElem){
    cls.push('dnd shake shake-rotate')
  }

  useEffect(() => {
    document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
  })

  const styles = {
    top: '28.9%',
    left: '0',
    width: '6.2083333em',
    height: '18.875em',
    position: 'absolute',
  }

  const landedOn = (e) => {
    setHintRotateElem(false)
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
    setHintRotateElem(false)
  }

  return (
    <span style={styles} id={nameElem}>
      <DragDropContainer
        targetKey="mop"
        dragData={{name: nameElem }}
        onDrag={(e) => landedOn(e)}
        onDragEnd={(e) => landedEnd(e)}
        dragElemOpacity={1}
      >
        
        <div style={styles} className={cls.join(' ')} id="mop-child"></div>
        </DragDropContainer>
    </span>
  )
}

export default MopElem
