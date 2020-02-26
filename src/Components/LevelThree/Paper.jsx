import React, { useEffect, useContext } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';
import { Context } from '../../context';

const Paper = ({hintRotateElem}) => {

    const { setHintRotateElem } = useContext(Context);

    const nameElem = 'paper';
    let cls = []
  
    if(hintRotateElem === nameElem){
      cls.push('dnd shake shake-rotate')
    }

    useEffect(() => {
        document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
    })

    const styles = {
        top: '20.2%',
        left: '83.7%',
        width: '1.58333333em',
        height: '1.70833333em',
        position: 'absolute',
    }

    const landedOn = (e) => {
        setHintRotateElem(false)
        document.getElementById(e.name).classList.add('dnd')
        let areaLeft = document.querySelector('.level-three-jbl').getBoundingClientRect().left;
        let elemLeft = parseInt(document.querySelector('#' + e.name + ' .ddcontainerghost').style.left)
        let areaWidth = document.querySelector('.level-three-jbl').offsetWidth
        let elemWidth = document.querySelector('#' + e.name + ' .ddcontainerghost > div').offsetWidth
        let areaTop = document.querySelector('.level-three-jbl').getBoundingClientRect().top;
        let elemTop = parseInt(document.querySelector('#' + e.name + ' .ddcontainerghost').style.top)
        let areaHeight = document.querySelector('.level-three-jbl').offsetHeight
        let elemHeight = document.querySelector('#' + e.name + ' .ddcontainerghost > div').offsetHeight


        if (elemLeft <= areaLeft) {
            document.querySelector('#' + e.name + ' .ddcontainerghost').style.left = areaLeft
        }

        if (elemLeft + elemWidth >= areaLeft + areaWidth) {
            document.querySelector('#' + e.name + ' .ddcontainerghost').style.left = areaLeft + areaWidth - elemWidth
        }

        if (elemTop <= areaTop) {
            document.querySelector('#' + e.name + ' .ddcontainerghost').style.top = areaTop
        }

        if (elemTop + elemHeight >= areaTop + areaHeight) {
            document.querySelector('#' + e.name + ' .ddcontainerghost').style.top = areaTop + areaHeight - elemHeight
        }
    }

    const landedEnd = (e) => {
        setHintRotateElem(false)
        document.getElementById(e.name).classList.remove('dnd')
    }

    return (
        <span style={styles} id={nameElem} className={cls.join(' ')}>
            <DragDropContainer
                targetKey="paper"
                dragData={{ name: nameElem }}
                onDrag={(e) => landedOn(e)}
                onDragEnd={(e) => landedEnd(e)}
                dragElemOpacity={1}
            >

                <div style={styles}>
                    <svg viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.813965" y="0.671143" width="35.9144" height="38.9018" fill="white" stroke="black" />
                    </svg>
                </div>
            </DragDropContainer>
        </span>
    )
}

export default Paper
