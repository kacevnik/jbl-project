import React, { useState } from 'react'

const DragElem1 = () => {

  const [dragTop, setDragTop] = useState('78%');
  const [dragLeft, setDragLeft] = useState('2%');

  const styles = {
    top: dragTop,
    left: dragLeft,
    width: '5.04166667em',
    height: '4.45833333em',
    position: 'absolute',
  }

  const mouseDownHendler = (e) => {
    var ball = document.getElementById('ball-1');
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
              left = '82%'
              top = '33%'
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
    <div style={styles} id='ball-1' onMouseDown={(e) => mouseDownHendler(e)}>
      <svg viewBox="0 0 121 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8025 84.6404L19.5068 81.0585L11.4176 84.365L12.2473 85.7511L12.7531 86.3791L14.3495 88.7566L15.5547 90.5891L21.8025 84.6404Z" fill="#4A4AD1" stroke="black" stroke-miterlimit="10"/>
        <path d="M107.275 26.1761C94.0656 5.70615 65.4579 0.525206 43.2849 14.6615C21.1118 28.7979 3.4391 63.4685 16.565 84.0528C29.6909 104.637 68.7819 103.098 90.856 88.9777C113.128 74.8257 120.385 46.6617 107.275 26.1761Z" fill="#4A4AD1" stroke="black" stroke-miterlimit="10"/>
        <path d="M44.0841 25.9847C45.9743 26.3935 47.1955 28.3247 46.7874 30.2104C46.3793 32.0962 44.4449 33.3132 42.5547 32.9045C40.6645 32.4957 39.4433 30.5645 39.8514 28.6787C40.2595 26.793 42.1939 25.576 44.0841 25.9847Z" fill="#4A6AD1" stroke="black" stroke-miterlimit="10"/>
        <path d="M81.8046 19.5995C81.2049 15.8487 73.7068 12.0777 65.3009 13.4095C56.8949 14.7414 50.9593 20.7421 51.559 24.4929C52.1587 28.2437 59.0728 28.3627 67.4787 27.0308C75.8689 25.6002 82.4043 23.3503 81.8046 19.5995Z" fill="#4A6AD1" stroke="black" stroke-miterlimit="10"/>
      </svg>
    </div>

  )
}
export default DragElem1
