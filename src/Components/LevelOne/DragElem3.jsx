import React, { useState } from 'react'

const DragElem1 = () => {

  const [dragTop, setDragTop] = useState('58.7%');
  const [dragLeft, setDragLeft] = useState('38.9%');

  const styles = {
    top: dragTop,
    left: dragLeft,
    width: '5.66em',
    height: '4.625em',
    position: 'absolute',
  }

  const mouseDownHendler = (e) => {
    var ball = document.getElementById('ball-3');
      let top = dragTop;
      let left = dragLeft;
      let x = e.pageX - ball.getBoundingClientRect().left;
      let y = e.pageY - ball.getBoundingClientRect().top;

      ball.classList.add('dnd');

      moveAt(e);

      ball.style.zIndex = 999;

      function moveAt(e) {
        let area = document.querySelector('.level-one-jbl');
        let goal = document.querySelector('.goal-area');
          let xx = e.pageX - area.getBoundingClientRect().left - x;
          let yy = e.pageY - area.getBoundingClientRect().top - y;

          if ( e.pageX >= goal.getBoundingClientRect().left && e.pageX <= goal.getBoundingClientRect().left + goal.offsetWidth && e.pageY >= goal.getBoundingClientRect().top && e.pageY <= goal.getBoundingClientRect().top + goal.offsetHeight ) {
            ball.classList.add('dnd-goal');
            ball.onmouseup = function() {
              ball.classList.remove('dnd-goal');
              ball.classList.remove('dnd');
              left = '80%'
              top = '41%'
            }
          } else {
            ball.classList.remove('dnd-goal');
          }

          if ( xx <= 0 ) {
            setDragLeft( 0 )
          } else if ( e.pageX + ball.offsetWidth - x >= area.offsetWidth + area.getBoundingClientRect().left ) {
            setDragLeft( area.offsetWidth - ball.offsetWidth )
          } else {
            setDragLeft( xx )
          }
          
          if ( yy <= 0 ) {
            setDragTop( 0 )
          } else if ( e.pageY + ball.offsetHeight - y >= area.offsetHeight + area.getBoundingClientRect().top ) {
            setDragTop( area.offsetHeight - ball.offsetHeight )
          } else {
            setDragTop( yy )
          }

      }

      document.onmousemove = function(e) {
        moveAt(e);
      }

      document.onmouseup = function(){
        document.onmousemove = null;
        ball.onmouseup = null;
        setDragLeft(left);
        setDragTop(top);
        ball.classList.remove('dnd');
      }

      ball.onmouseup = function() {
          document.onmousemove = null;
          ball.onmouseup = null;
          setDragLeft(left);
          setDragTop(top);
          ball.classList.remove('dnd');
      }
  }
  return (
    <div style={styles} id='ball-3' onMouseDown={(e) => mouseDownHendler(e)}>
        <svg viewBox="0 0 136 111" fill="none" xmlns="http://www.w3.org/2000/svg" id="ball-3">
            <path d="M47.2661 105.277L45.5326 103.822L43.2662 102.013L42.6249 101.567L41.4332 100.567L48.244 94.8339L51.5939 97.553L47.2661 105.277Z" fill="#FF4713" stroke="black" stroke-miterlimit="10"/>
            <path d="M119.511 79.8593C102.599 100.566 65.4076 114.225 46.3566 98.4203C27.2149 82.7247 33.3556 43.4678 50.2769 22.861C67.1892 2.15439 96.414 -1.84803 115.556 13.8476C134.706 29.643 136.424 59.1527 119.511 79.8593Z" fill="#FF4713" stroke="black" stroke-miterlimit="10"/>
            <path d="M45.6031 97.9457C42.154 94.9054 33.7153 89.5642 27.5526 92.5207C19.8493 96.2165 15.7796 95.6095 15.467 92.0879C15.069 87.6056 9.55798 82.0713 6.65817 83.3327" stroke="black"/>
            <path d="M51.2803 37.5527C51.4574 39.5479 53.191 41.0028 55.1807 40.8262C57.1705 40.6495 58.6205 38.912 58.4434 36.9167C58.2662 34.9214 56.5327 33.4665 54.543 33.6432C52.6527 33.811 51.1031 35.5574 51.2803 37.5527Z" fill="#FF6539" stroke="black" stroke-miterlimit="10"/>
            <path d="M77.4245 27.0869C69.7489 30.986 63.1166 33.0831 61.3055 29.6241C59.6026 26.2561 63.433 18.5758 71.0997 14.577C78.7753 10.6779 87.2187 12.0398 88.9215 15.4079C90.6421 18.9755 85.1 23.1879 77.4245 27.0869Z" fill="#FF6539" stroke="black" stroke-miterlimit="10"/>
        </svg>
    </div>

  )
}
export default DragElem1
