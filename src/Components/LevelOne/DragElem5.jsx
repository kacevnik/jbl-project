import React, { useState, useContext } from 'react'
import {Context} from '../../context';

const DragElem1 = () => {

  const {counterBalls } = useContext(Context);

  const [dragTop, setDragTop] = useState('63%');
  const [dragLeft, setDragLeft] = useState('90%');

  const styles = {
    top: dragTop,
    left: dragLeft,
    width: '5.625em',
    height: '6.625em',
    position: 'absolute',
  }

  const mouseDownHendler = (e) => {
    var ball = document.getElementById('ball-5');
      let top = dragTop;
      let left = dragLeft;
      let x = e.pageX - ball.getBoundingClientRect().left;
      let y = e.pageY - ball.getBoundingClientRect().top;

      ball.classList.add('dnd');

      moveAt(e);

      ball.style.zIndex = 1000;

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
              left = '85%'
              top = '47%'
              ball.style.zIndex = 998;
              counterBalls()
            }
          } else {
            ball.onmouseup = null
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
    <div style={styles} id='ball-5' onMouseDown={(e) => mouseDownHendler(e)}>
        <svg viewBox="0 0 135 159" fill="none" xmlns="http://www.w3.org/2000/svg" id="ball-5">
            <path d="M25.6193 102.282L27.1433 103.863L29.1133 105.945L29.6152 106.577L30.7861 107.693L35.8079 100.561L32.8156 97.5298L25.6193 102.282Z" fill="#6AD1CB" stroke="black" strokeMiterlimit="10"/>
            <path d="M33.5894 104C35.256 104.5 30.0894 120 41.0894 120C54.9187 120 42.0894 133 53.0894 138" stroke="black"/>
            <path d="M43.9907 29.3679C25.2637 47.7878 15.1387 85.3747 32.3491 102.724C49.4293 120.128 87.3586 110.601 106.086 92.181C124.813 73.7611 126.086 44.7822 109.005 27.3778C91.8879 10.0661 62.755 10.8552 43.9907 29.3679Z" fill="#4AE6D1" stroke="black" strokeMiterlimit="10"/>
            <path d="M91.6401 92.4089C89.7066 92.3861 88.0525 90.861 88.1089 88.8387C88.1281 86.9091 89.746 85.2985 91.6795 85.3214C93.613 85.3442 95.2671 86.8693 95.2107 88.8915C95.1915 90.8211 93.5736 92.4317 91.6401 92.4089Z" fill="#77FFF7" stroke="black" strokeMiterlimit="10"/>
            <path d="M99.4565 65.9494C96.2936 73.8279 94.7857 80.5411 98.4105 81.9964C101.942 83.4143 109.12 78.9772 112.283 71.0986C115.446 63.2201 113.329 55.0517 109.89 53.6711C106.265 52.2158 102.619 58.0709 99.4565 65.9494Z" fill="#77FFF7" stroke="black" strokeMiterlimit="10"/>
        </svg>
    </div>

  )
}
export default DragElem1
