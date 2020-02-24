import React, { useEffect } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';

const KeyElem = () => {

    const nameElem = 'key-elem';

    useEffect(() => {
        document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
    })

    const styles = {
        top: '66.1%',
        left: '38.2%',
        width: '4em',
        height: '1.45833333em',
        position: 'absolute',
    }

    const landedOn = (e) => {
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
        document.getElementById(e.name).classList.remove('dnd')
    }

    return (
        <span style={styles} id={nameElem}>
            <DragDropContainer
                targetKey="key-elem"
                dragData={{ name: nameElem }}
                onDrag={(e) => landedOn(e)}
                onDragEnd={(e) => landedEnd(e)}
                dragElemOpacity={1}
            >

                <div style={styles}>
                    <svg viewBox="0 0 100 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.7019 19.3107L14.6914 9.01729L4.75104 7.25652C8.66773 2.90044 14.6767 0.603856 20.8696 1.70082C27.4261 2.8622 32.4825 7.52514 34.4556 13.4249L91.1758 23.472C95.727 24.2781 98.7629 28.6211 97.9567 33.1722C97.1506 37.7234 92.8076 40.7593 88.2565 39.9531L31.5362 29.9061C27.6566 34.7692 21.3062 37.4116 14.7497 36.2502C8.55686 35.1533 3.70235 30.9324 1.52023 25.496L11.4606 27.2568L19.7019 19.3107ZM87.9872 34.3653C89.5717 34.646 91.0837 33.5891 91.3643 32.0046C91.645 30.4201 90.588 28.9081 89.0036 28.6274C87.4191 28.3468 85.9071 29.4037 85.6264 30.9882C85.3458 32.5727 86.4027 34.0847 87.9872 34.3653Z" />
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.7019 19.3107L14.6914 9.01729L4.75104 7.25652C8.66773 2.90044 14.6767 0.603856 20.8696 1.70082C27.4261 2.8622 32.4825 7.52514 34.4556 13.4249L91.1758 23.472C95.727 24.2781 98.7629 28.6211 97.9567 33.1722C97.1506 37.7234 92.8076 40.7593 88.2565 39.9531L31.5362 29.9061C27.6566 34.7692 21.3062 37.4116 14.7497 36.2502C8.55686 35.1533 3.70235 30.9324 1.52023 25.496L11.4606 27.2568L19.7019 19.3107ZM87.9872 34.3653C89.5717 34.646 91.0837 33.5891 91.3643 32.0046C91.645 30.4201 90.588 28.9081 89.0036 28.6274C87.4191 28.3468 85.9071 29.4037 85.6264 30.9882C85.3458 32.5727 86.4027 34.0847 87.9872 34.3653Z" fill="#404041" />
                        <path d="M14.6914 9.01729L14.8658 8.03262L15.3676 8.12149L15.5906 8.57962L14.6914 9.01729ZM19.7019 19.3107L20.601 18.873L20.919 19.5263L20.396 20.0306L19.7019 19.3107ZM4.75104 7.25652L4.57663 8.24119L2.80334 7.92708L4.00743 6.58791L4.75104 7.25652ZM34.4556 13.4249L34.2812 14.4096L33.6958 14.3059L33.5072 13.7421L34.4556 13.4249ZM91.1758 23.472L91.3502 22.4873L91.1758 23.472ZM88.2565 39.9531L88.082 40.9378L88.2565 39.9531ZM31.5362 29.9061L30.7545 29.2825L31.1252 28.8177L31.7106 28.9214L31.5362 29.9061ZM1.52023 25.496L0.592198 25.8685L-0.0786446 24.1972L1.69465 24.5113L1.52023 25.496ZM11.4606 27.2568L12.1547 27.9767L11.7879 28.3303L11.2862 28.2415L11.4606 27.2568ZM15.5906 8.57962L20.601 18.873L18.8028 19.7484L13.7923 9.45496L15.5906 8.57962ZM4.92546 6.27185L14.8658 8.03262L14.517 10.002L4.57663 8.24119L4.92546 6.27185ZM20.6951 2.68549C14.8564 1.65125 9.19014 3.81507 5.49466 7.92513L4.00743 6.58791C8.14533 1.98581 14.497 -0.443538 21.044 0.716146L20.6951 2.68549ZM33.5072 13.7421C31.6456 8.17584 26.8766 3.78043 20.6951 2.68549L21.044 0.716146C27.9756 1.94396 33.3193 6.87445 35.4039 13.1078L33.5072 13.7421ZM34.63 12.4403L91.3502 22.4873L91.0014 24.4567L34.2812 14.4096L34.63 12.4403ZM91.3502 22.4873C96.4452 23.3898 99.8439 28.2517 98.9414 33.3467L96.972 32.9978C97.6819 28.9905 95.0087 25.1665 91.0014 24.4567L91.3502 22.4873ZM98.9414 33.3467C98.0389 38.4416 93.177 41.8403 88.082 40.9378L88.4309 38.9685C92.4382 39.6783 96.2622 37.0052 96.972 32.9978L98.9414 33.3467ZM88.082 40.9378L31.3618 30.8908L31.7106 28.9214L88.4309 38.9685L88.082 40.9378ZM14.9241 35.2655C21.1056 36.3605 27.0942 33.8706 30.7545 29.2825L32.3179 30.5297C28.219 35.6677 21.5069 38.4627 14.5753 37.2349L14.9241 35.2655ZM2.44826 25.1235C4.50714 30.2529 9.08538 34.2313 14.9241 35.2655L14.5753 37.2349C8.02835 36.0752 2.89756 31.6119 0.592198 25.8685L2.44826 25.1235ZM11.2862 28.2415L1.34581 26.4807L1.69465 24.5113L11.635 26.2721L11.2862 28.2415ZM20.396 20.0306L12.1547 27.9767L10.7665 26.5369L19.0078 18.5908L20.396 20.0306ZM92.349 32.179C91.972 34.3073 89.9411 35.727 87.8128 35.35L88.1616 33.3807C89.2023 33.565 90.1953 32.8708 90.3797 31.8302L92.349 32.179ZM89.178 27.6428C91.3063 28.0198 92.726 30.0507 92.349 32.179L90.3797 31.8302C90.564 30.7895 89.8698 29.7965 88.8292 29.6121L89.178 27.6428ZM84.6418 30.8138C85.0188 28.6855 87.0497 27.2658 89.178 27.6428L88.8292 29.6121C87.7885 29.4278 86.7954 30.122 86.6111 31.1626L84.6418 30.8138ZM87.8128 35.35C85.6845 34.973 84.2648 32.9421 84.6418 30.8138L86.6111 31.1626C86.4268 32.2033 87.121 33.1963 88.1616 33.3807L87.8128 35.35Z" fill="black" mask="url(#path-1-inside-1)" />
                    </svg>
                </div>
            </DragDropContainer>
        </span>
    )
}

export default KeyElem
