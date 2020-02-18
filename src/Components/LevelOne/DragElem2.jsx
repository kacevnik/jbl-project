import React, { useState, useContext } from 'react'
import {Context} from '../../context';

const DragElem1 = () => {
  const {counterBalls } = useContext(Context);

  const [dragTop, setDragTop] = useState('81.7%');
  const [dragLeft, setDragLeft] = useState('11.8%');

  const styles = {
    top: dragTop,
    left: dragLeft,
    width: '4.91em',
    height: '5.66em',
    position: 'absolute',
  }

  const mouseDownHendler = (e) => {
    var ball = document.getElementById('ball-2');
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
              left = '87%'
              top = '37%'
              ball.style.zIndex = 994;
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
    <div style={styles} id='ball-2' onMouseDown={(e) => mouseDownHendler(e)}>
        <svg viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg" id="ball-2">
            <path d="M25.9542 109.094L27.8867 110.132L30.3346 111.549L30.9726 112.001L32.3189 112.78L34.9869 104.6L31.3408 102.57L25.9542 109.094Z" fill="#FFA6D7" stroke="black" strokeMiterlimit="10"/>
            <path d="M22.4037 34.8709C10.0786 57.5632 11.3095 96.1167 32.444 107.459C53.5079 118.923 86.3596 99.1298 98.6847 76.4374C111.01 53.7451 103.982 25.9731 82.8922 14.4118C61.8283 2.94717 34.703 12.0818 22.4037 34.8709Z" fill="#FFA6D7" stroke="black" strokeMiterlimit="10"/>
            <path d="M85.0701 80.8113C83.263 81.3992 81.3306 80.3616 80.7157 78.4526C80.1267 76.6403 81.1331 74.608 83.0626 74.0909C84.8697 73.503 86.8022 74.5406 87.4171 76.4496C88.0061 78.2619 86.9737 80.1975 85.0701 80.8113Z" fill="#FFDDF0" stroke="black" strokeMiterlimit="10"/>
            <path d="M84.8836 53.4875C84.1077 61.7831 84.6868 68.5751 88.4969 68.9022C92.2105 69.255 97.649 62.9244 98.4248 54.6288C99.2007 46.3332 94.8115 39.2141 91.2203 38.9321C87.4102 38.6051 85.6594 45.1919 84.8836 53.4875Z" fill="#FFDDF0" stroke="black" strokeMiterlimit="10"/>
        </svg>
    </div>

  )
}
export default DragElem1
