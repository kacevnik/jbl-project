import React, { useEffect, useContext } from 'react'
import { DragDropContainer } from 'react-drag-drop-container';
import { Context } from '../../context';

const Cheptos = ({hintRotateElem}) => {

    const { setHintRotateElem } = useContext(Context);

    const nameElem = 'cheptos';
    let cls = []
  
    if(hintRotateElem === nameElem){
      cls.push('dnd shake shake-rotate')
    }

    useEffect(() => {
        document.querySelector('#' + nameElem + ' .ddcontainer').style.cursor = 'default'
    })

    const styles = {
        top: '13.9%',
        left: '22%',
        width: '4.5em',
        height: '5.5416666em',
        position: 'absolute',
    }

    const landedOn = (e) => {
        setHintRotateElem(false)
        document.getElementById(e.name).classList.add('dnd')
        let areaLeft = document.querySelector('.level-two-jbl').getBoundingClientRect().left;
        let elemLeft = parseInt(document.querySelector('#' + e.name + ' .ddcontainerghost').style.left)
        let areaWidth = document.querySelector('.level-two-jbl').offsetWidth
        let elemWidth = document.querySelector('#' + e.name + ' .ddcontainerghost > div').offsetWidth
        let areaTop = document.querySelector('.level-two-jbl').getBoundingClientRect().top;
        let elemTop = parseInt(document.querySelector('#' + e.name + ' .ddcontainerghost').style.top)
        let areaHeight = document.querySelector('.level-two-jbl').offsetHeight
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
    }

    return (
        <span style={styles} id={nameElem}>
            <DragDropContainer
                targetKey="cheptos"
                dragData={{ name: nameElem }}
                onDrag={(e) => landedOn(e)}
                onDragEnd={(e) => landedEnd(e)}
                dragElemOpacity={1}
            >

                <div style={styles} className={cls.join(' ')}>
                    <svg viewBox="0 0 118 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1992 17.3548C11.2458 16.7586 11.6273 16.2466 12.219 15.9371C17.3296 13.264 23.6317 11.6143 30.5426 10.3634C35.1492 9.52967 39.9975 8.87749 44.9265 8.21448C47.3977 7.88206 49.8892 7.54692 52.3806 7.18481C54.2537 6.91257 56.1234 6.62847 57.9949 6.3441C71.4014 4.307 84.8985 2.25615 100.367 4.4521C101.402 4.59901 102.231 5.42561 102.407 6.47052C106.199 29.0224 104.629 45.4462 101.765 61.9794C101.074 65.9704 100.306 69.9716 99.5197 74.0691C97.0493 86.9452 94.3964 100.772 93.3568 118.221C93.2899 119.343 92.4951 120.302 91.4116 120.552L21.3404 136.695C20.5959 136.867 19.7991 136.68 19.1595 136.213C18.0834 135.427 17.045 134.77 16.0771 134.161L15.9672 134.092C15.0368 133.507 14.1796 132.967 13.3953 132.388C11.7813 131.196 10.5018 129.853 9.67413 127.684C8.83874 125.494 8.44794 122.421 8.71 117.745C8.97186 113.073 9.8829 106.837 11.62 98.3441C15.0924 81.3668 14.7972 63.4382 13.7319 48.596C13.2808 42.3109 12.6909 36.5722 12.1894 31.6932C12.0986 30.8104 12.0108 29.9558 11.9272 29.1312C11.379 23.7245 11.0193 19.6559 11.1992 17.3548Z" fill="#FFF480" stroke="black" />
                        <path d="M11.993 17.8405C11.7355 16.4123 12.7325 15.0548 14.165 14.8887L101.305 4.78238C102.614 4.63052 103.823 5.53595 104.054 6.83832C112.023 51.7575 113.885 78.289 111.686 124.021C111.628 125.215 110.729 126.211 109.55 126.381L22.5706 138.915C21.0392 139.136 19.6722 137.915 19.7108 136.363C20.8365 91.0535 20.3283 64.058 11.993 17.8405Z" fill="#FFF480" stroke="black" />
                        <path d="M40.2973 87.393C39.2553 84.3857 38.2534 79.7578 35.9678 79.484C34.5236 79.311 33.258 80.3019 32.17 81.8377C30.4695 84.238 29.3317 87.7874 28.9966 91.6193C28.818 93.6615 28.8348 95.9987 29.0722 98.0456C29.3915 100.8 30.6339 102.325 31.9904 103.549C33.4742 104.889 37.0468 105.325 37.7679 101.834" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M44.7998 84.4897C43.8808 91.1209 42.4839 97.2791 40.9608 103.516C40.6171 104.924 40.0937 106.406 39.9085 107.926C39.8445 108.452 39.8212 108.912 39.6613 109.36" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M42.9357 98.6855C44.5486 99.483 46.1803 100.443 47.8594 100.499C48.0691 100.506 48.8716 100.447 48.877 100.72" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M51.2869 86.9889C50.5072 95.0245 49.4522 102.957 49.0838 111.106C49.0688 111.438 48.8942 115.06 48.8767 114.178" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M55.3234 87.6352C54.741 95.1854 54.3884 102.856 53.7339 110.379C53.6375 111.486 53.4056 112.606 53.4282 113.741C53.4419 114.433 53.9747 114.336 54.252 114.332C55.8353 114.308 57.4157 114.016 59.0069 114.023C59.368 114.025 60.6908 114.776 60.6707 113.762" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M54.5177 101.105C55.5591 101.204 58.426 101.481 59.6085 101.578C60.2667 101.631 61.057 102.246 61.5828 101.574C61.7144 101.405 61.2593 101.041 61.2213 101.002" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M56.2568 87.384C57.9119 87.5137 59.5991 87.5297 61.251 87.8716C61.747 87.9742 61.3262 87.9812 61.2316 88.0162" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M67.5035 113.422C66.9223 105.407 66.1824 97.2989 66.084 89.229C66.0566 86.9772 68.2663 86.1168 69.251 87.0031C70.7506 88.3528 71.3152 92.6278 70.3456 94.8435C69.6115 96.5213 68.2415 98.5355 66.9399 98.5554" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M73.6527 85.4652C75.5041 84.5487 77.362 83.6677 79.1753 82.5473C79.6485 82.2549 80.1293 81.8313 80.6249 81.6332C80.6545 81.6213 81.1601 81.5725 80.9516 81.5757" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M77.1293 84.9402C78.1601 92.0862 79.9333 98.8363 80.9671 105.974C81.2262 107.763 81.8473 113.148 81.8108 111.313" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M85.2244 80.5653C86.0848 86.4031 87.1343 93.951 90.0698 97.937C91.3431 99.666 92.9025 99.0046 93.636 96.6756C94.9475 92.5113 94.0308 85.168 92.7177 81.2113C91.6554 78.0102 89.863 74.2788 87.5157 74.3913C85.7269 74.4771 85.3459 79.8148 85.2572 82.2175" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M98.419 62.8912C97.6118 65.9835 96.7617 69.0584 96.0489 72.2276C95.7536 73.5406 95.5193 74.7994 95.6145 76.235C95.7206 77.8369 96.3653 77.5909 97.1158 77.55C98.3624 77.4821 101.263 74.2286 102.294 76.4344C102.767 77.4463 102.661 79.2966 102.628 80.4826C102.559 82.9743 102.137 85.4409 101.738 87.8025C101.379 89.9282 100.855 91.9521 100.544 94.1039C100.411 95.0285 100.13 96.5748 100.666 94.9678" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="0.609752" y="0.346096" width="54.7389" height="44.9234" rx="22.4617" transform="matrix(0.961726 -0.274013 0.257778 0.966204 31.7392 40.0693)" fill="#EFA65B" stroke="black" />
                        <rect width="12.3301" height="20.5236" rx="6.16505" transform="matrix(0.961726 -0.274013 0.257778 0.966204 32.079 47.6008)" fill="white" />
                        <rect width="12.3301" height="20.5236" rx="6.16505" transform="matrix(0.961726 -0.274013 0.257778 0.966204 49.3184 42.6897)" fill="white" />
                        <path d="M51.5016 58.1505C51.6248 60.6297 50.2013 65.9096 43.7852 68.3265C43.0646 68.5979 42.6224 69.3644 42.8206 70.1074V70.1074C43.0084 70.8112 43.7285 71.2199 44.4291 71.0203L54.193 68.2384L55.0703 71.5267" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.4841 55.9625L35.2597 58.8697C36.6677 64.1472 39.7143 66.4005 43.3239 65.3721C47.505 64.1808 48.0077 61.2942 46.9195 57.1481L45.3957 51.4367C44.2767 47.2426 42.417 44.9896 38.2058 46.1894C34.6148 47.2126 33.113 50.7299 34.4841 55.9625ZM34.22 57.5336L34.69 59.2952C36.2378 65.097 38.8445 67.5885 45.6625 65.6459C52.8148 63.6081 52.6675 57.9338 51.7257 54.4039L51.7253 54.403L50.8597 51.1585C49.9179 47.6285 47.2305 42.6779 40.0783 44.7157C33.2603 46.6583 32.2574 50.1783 33.8053 55.98L34.2193 57.5319L34.22 57.5336Z" fill="black" />
                        <path d="M52.305 54.0125L50.4494 47.0574L50.9765 51.4592L50.8291 51.0416L51.7353 54.4381C53.2831 60.2398 55.8898 62.7313 62.7079 60.7888C69.8601 58.751 69.7128 53.0767 68.771 49.5467L64.8459 41.5641L61.3768 42.5901L63.9411 52.2015C65.06 56.3955 64.5803 59.3151 60.3692 60.5149C56.7596 61.5433 53.713 59.29 52.305 54.0125Z" fill="black" />
                        <path d="M51.5511 51.1865L53.4066 58.1416L51.382 52.9793L51.2648 52.6747L50.8508 51.1228C49.3029 45.321 50.3058 41.8011 57.1238 39.8585C64.276 37.8207 66.9634 42.7713 67.9052 46.3013L68.7782 49.5738L65.0054 56.1908L62.4412 46.5794C61.3222 42.3854 59.4625 40.1324 55.2513 41.3322C51.6418 42.3606 50.143 45.909 51.5511 51.1865Z" fill="black" />
                        <path d="M39.3856 56.1724C39.7663 57.5995 40.2461 58.8359 40.7053 59.6796C40.9368 60.105 41.1496 60.4055 41.3247 60.5814C41.3675 60.6244 41.4024 60.6547 41.4299 60.6758C41.4429 60.6431 41.4579 60.5987 41.4734 60.539C41.5365 60.2953 41.5702 59.9245 41.5581 59.4367C41.5339 58.469 41.3328 57.1531 40.9521 55.7261C40.5714 54.2991 40.0916 53.0627 39.6324 52.2189C39.4009 51.7935 39.1881 51.493 39.013 51.3172C38.9702 51.2742 38.9353 51.2439 38.9078 51.2227C38.8948 51.2555 38.8798 51.2999 38.8643 51.3596C38.8012 51.6033 38.7674 51.974 38.7796 52.4619C38.8038 53.4296 39.0049 54.7454 39.3856 56.1724Z" fill="#EFA65B" stroke="black" />
                        <path d="M56.4311 51.3166C56.8119 52.7436 57.2917 53.9801 57.7508 54.8238C57.9823 55.2492 58.1951 55.5497 58.3702 55.7255C58.413 55.7686 58.4479 55.7988 58.4754 55.82C58.4885 55.7873 58.5034 55.7428 58.5189 55.6832C58.582 55.4395 58.6158 55.0687 58.6036 54.5808C58.5795 53.6131 58.3783 52.2973 57.9976 50.8703C57.6169 49.4433 57.1371 48.2068 56.678 47.3631C56.4465 46.9377 56.2336 46.6372 56.0586 46.4614C56.0157 46.4183 55.9808 46.3881 55.9534 46.3669C55.9403 46.3996 55.9253 46.4441 55.9099 46.5037C55.8467 46.7474 55.813 47.1182 55.8251 47.6061C55.8493 48.5738 56.0504 49.8896 56.4311 51.3166Z" fill="#EFA65B" stroke="black" />
                        <ellipse rx="1.32899" ry="1.38334" transform="matrix(0.961726 -0.274013 0.257778 0.966204 72.9511 56.4314)" fill="white" />
                        <ellipse cx="76.3027" cy="70.7217" rx="1.32664" ry="1.38559" transform="rotate(-4.01776 76.3027 70.7217)" fill="white" />
                        <ellipse rx="1.32899" ry="1.38334" transform="matrix(0.961726 -0.274013 0.257778 0.966204 83.947 58.2894)" fill="white" />
                        <ellipse rx="1.32899" ry="1.38334" transform="matrix(0.961726 -0.274013 0.257778 0.966204 78.1445 41.6953)" fill="white" />
                        <path d="M51.3137 72.7611C54.1617 75.7367 62.0653 75.9181 68.0068 66.6481" stroke="black" strokeLinecap="round" />
                        <path d="M23.0551 36.8625C26.0147 39.1859 29.1829 41.082 32.3203 43.1249" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33.0251 34.3193C34.2049 35.9021 35.4065 37.5012 36.4532 39.1482" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M88.1522 29.6792C88.4546 29.0061 92.7874 20.2892 92.9451 20.4322" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M90.9478 31.7869C92.2663 30.8312 93.7953 29.9871 95.0099 28.89" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M92.5343 35.5164C94.1844 35.2599 95.8313 34.9821 97.4786 34.7082" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32.3982 119.626C31.2999 121.809 30.0771 123.897 28.8758 126.018" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M39.8499 123.096C40.6449 124.511 41.3989 125.946 42.1767 127.37C42.3884 127.758 42.5629 127.991 42.8603 128.261" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M99.2223 107.712C98.7356 109.171 98.3598 111.567 97.3703 112.758" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M84.5094 118.116C85.6413 119.573 86.7733 121.029 87.9052 122.486" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M105.638 48.2684C104.523 50.0574 103.462 51.867 102.49 53.7128" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27.0907 65.0002C28.5884 66.4659 30.0638 67.9465 31.5219 69.4514" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M44.1982 25.8528C45.0821 23.8372 45.9723 21.8246 46.8289 19.7961C47.0083 19.3714 46.9743 19.3062 46.9887 19.5117" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M68.2549 18.6328C69.4665 19.8279 70.6781 21.023 71.8898 22.2181" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </DragDropContainer>
        </span>
    )
}

export default Cheptos
