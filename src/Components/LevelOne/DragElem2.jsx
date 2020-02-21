import React, { useEffect } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';

const DragElem2 = () => {

  const nameElem = 'ball-2';

  useEffect(() => {
    document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
  })

  const styles = {
    top: '81.7%',
    left: '11.8%',
    width: '4.91em',
    height: '5.66em',
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
    <svg viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg" id="ball-2">
            <path d="M25.9542 109.094L27.8867 110.132L30.3346 111.549L30.9726 112.001L32.3189 112.78L34.9869 104.6L31.3408 102.57L25.9542 109.094Z" fill="#FFA6D7" stroke="black" strokeMiterlimit="10"/>
            <path d="M22.4037 34.8709C10.0786 57.5632 11.3095 96.1167 32.444 107.459C53.5079 118.923 86.3596 99.1298 98.6847 76.4374C111.01 53.7451 103.982 25.9731 82.8922 14.4118C61.8283 2.94717 34.703 12.0818 22.4037 34.8709Z" fill="#FFA6D7" stroke="black" strokeMiterlimit="10"/>
            <path d="M85.0701 80.8113C83.263 81.3992 81.3306 80.3616 80.7157 78.4526C80.1267 76.6403 81.1331 74.608 83.0626 74.0909C84.8697 73.503 86.8022 74.5406 87.4171 76.4496C88.0061 78.2619 86.9737 80.1975 85.0701 80.8113Z" fill="#FFDDF0" stroke="black" strokeMiterlimit="10"/>
            <path d="M84.8836 53.4875C84.1077 61.7831 84.6868 68.5751 88.4969 68.9022C92.2105 69.255 97.649 62.9244 98.4248 54.6288C99.2007 46.3332 94.8115 39.2141 91.2203 38.9321C87.4102 38.6051 85.6594 45.1919 84.8836 53.4875Z" fill="#FFDDF0" stroke="black" strokeMiterlimit="10"/>
        </svg>
    </div>
</DragDropContainer>
    </span>
  )
}

export default DragElem2
