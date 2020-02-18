import React, { useState, useContext } from 'react'
import { Context } from '../../context';

const DragElem1 = () => {

  const { chengeRoom1Count } = useContext(Context);

  const [dragTop, setDragTop] = useState('60.5%');
  const [dragLeft, setDragLeft] = useState('86.6%');
  const [flag, setFlag] = useState(true);

  const styles = {
    top: dragTop,
    left: dragLeft,
    width: '2.833em',
    height: '6.458em',
    position: 'absolute',
  }

  const mouseDownHendler = (e) => {
    var ball = document.getElementById('vaza');
    let top = dragTop;
    let left = dragLeft;
    let x = e.pageX - ball.getBoundingClientRect().left;
    let y = e.pageY - ball.getBoundingClientRect().top;

    ball.classList.add('dnd');

    moveAt(e);

    ball.style.zIndex = 1000;

    function moveAt(e) {
      let area = document.querySelector('.level-one-jbl');
      let goal = document.querySelector('.goal-area-2');
      let xx = e.pageX - area.getBoundingClientRect().left - x;
      let yy = e.pageY - area.getBoundingClientRect().top - y;

      if (e.pageX >= goal.getBoundingClientRect().left && e.pageX <= goal.getBoundingClientRect().left + goal.offsetWidth && e.pageY >= goal.getBoundingClientRect().top && e.pageY <= goal.getBoundingClientRect().top + goal.offsetHeight) {
        ball.classList.add('dnd-goal');
        ball.onmouseup = function () {
          ball.classList.remove('dnd-goal');
          ball.classList.remove('dnd');
          left = '67.2%'
          top = '3%'
          if (flag) {
            setFlag(false)
            chengeRoom1Count('msg-1')
          }
        }
      } else {
        ball.onmouseup = null
        ball.classList.remove('dnd-goal');
      }

      if (xx <= 0) {
        setDragLeft(0)
      } else if (e.pageX + ball.offsetWidth - x >= area.offsetWidth + area.getBoundingClientRect().left) {
        setDragLeft(area.offsetWidth - ball.offsetWidth)
      } else {
        setDragLeft(xx)
      }

      if (yy <= 0) {
        setDragTop(0)
      } else if (e.pageY + ball.offsetHeight - y >= area.offsetHeight + area.getBoundingClientRect().top) {
        setDragTop(area.offsetHeight - ball.offsetHeight)
      } else {
        setDragTop(yy)
      }

    }

    document.onmousemove = function (e) {
      moveAt(e);
    }

    document.onmouseup = function () {
      document.onmousemove = null;
      ball.onmouseup = null;
      setDragLeft(left);
      setDragTop(top);
      ball.classList.remove('dnd');
    }

    ball.onmouseup = function () {
      document.onmousemove = null;
      ball.onmouseup = null;
      setDragLeft(left);
      setDragTop(top);
      ball.classList.remove('dnd');
    }
  }
  return (
    <div style={styles} id='vaza' onMouseDown={(e) => mouseDownHendler(e)}>
      <svg viewBox="0 0 68 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.4964 36.968L55.4372 8.94981C55.877 6.60382 54.3375 4.34473 52.3581 4.34473H15.3366C13.2839 4.34473 11.7444 6.51693 12.2576 8.94981L26.1983 36.968C19.6737 44.1798 0.894531 38.6609 0.894531 50.0433C0.894531 69.3326 14.8563 140.626 30.1048 152.617C32.0842 154.181 33.884 154.094 33.884 154.094C33.884 154.094 35.6106 154.181 37.59 152.617C52.8384 140.713 66.8002 69.4194 66.8002 50.0433C66.8002 38.574 47.9477 44.1798 41.4964 36.968Z" fill="#FF4713" stroke="black" strokeMiterlimit="10" />
        <path d="M22.4478 141.929L24.738 140.191L27.0282 141.929L29.3771 140.191L31.6673 141.929L33.9575 140.191L36.2477 141.929L38.5379 140.191L40.8868 141.929L43.177 140.191L45.4672 141.929" stroke="black" strokeMiterlimit="10" />
        <path d="M12.0095 111.605L14.2361 113.343L16.399 111.605L18.6256 113.343L20.7886 111.605L23.0152 113.343L25.1782 111.605L27.3411 113.343L29.5677 111.605L31.7307 113.343L33.9572 111.605L36.1202 113.343L38.3468 111.605L40.5097 113.343L42.7363 111.605L44.8993 113.343L47.1259 111.605L49.3524 113.343L51.5154 111.605L53.742 113.343L55.9049 111.605" stroke="black" strokeMiterlimit="10" />
        <path d="M31.9048 153.834C31.9048 153.834 23.1586 144.319 14.1716 87.7544" stroke="black" strokeMiterlimit="10" />
        <path d="M5.91382 85.8862L8.71818 87.624L11.5225 85.8862L14.3269 87.624L17.1312 85.8862L19.9356 87.624L22.74 85.8862L25.5443 87.624L28.3486 85.8862L31.153 87.624L33.9574 85.8862L36.7617 87.624L39.5661 85.8862L42.3704 87.624L45.1748 85.8862L47.9792 87.624L50.7835 85.8862L53.5878 87.624L56.3922 85.8862L59.1966 87.624L62.0009 85.8862" stroke="black" strokeMiterlimit="10" />
        <path d="M4.94971 81.3679L7.85045 83.1057L10.7512 81.3679L13.6519 83.1057L16.5527 81.3679L19.4535 83.1057L22.3542 81.3679L25.2549 83.1057L28.1557 81.3679L31.0565 83.1057L33.9572 81.3679L36.8579 83.1057L39.7587 81.3679L42.6594 83.1057L45.5602 81.3679L48.4609 83.1057L51.3617 81.3679L54.2624 83.1057L57.1632 81.3679L60.064 83.1057L62.9647 81.3679" stroke="black" strokeMiterlimit="10" />
        <path d="M60.129 76.1543C61.0602 76.1543 61.8151 74.6761 61.8151 72.8526C61.8151 71.029 61.0602 69.5508 60.129 69.5508C59.1978 69.5508 58.4429 71.029 58.4429 72.8526C58.4429 74.6761 59.1978 76.1543 60.129 76.1543Z" fill="#EF895B" stroke="black" strokeMiterlimit="10" />
        <path d="M47.1532 76.1543C48.0844 76.1543 48.8393 74.6761 48.8393 72.8526C48.8393 71.029 48.0844 69.5508 47.1532 69.5508C46.2219 69.5508 45.467 71.029 45.467 72.8526C45.467 74.6761 46.2219 76.1543 47.1532 76.1543Z" fill="#EF895B" stroke="black" strokeMiterlimit="10" />
        <path d="M34.1041 76.1543C35.0353 76.1543 35.7902 74.6761 35.7902 72.8526C35.7902 71.029 35.0353 69.5508 34.1041 69.5508C33.1729 69.5508 32.418 71.029 32.418 72.8526C32.418 74.6761 33.1729 76.1543 34.1041 76.1543Z" fill="#EF895B" stroke="black" strokeMiterlimit="10" />
        <path d="M20.9083 76.1543C21.8395 76.1543 22.5944 74.6761 22.5944 72.8526C22.5944 71.029 21.8395 69.5508 20.9083 69.5508C19.9771 69.5508 19.2222 71.029 19.2222 72.8526C19.2222 74.6761 19.9771 76.1543 20.9083 76.1543Z" fill="#EF895B" stroke="black" strokeMiterlimit="10" />
        <path d="M7.78574 76.1543C8.71697 76.1543 9.47187 74.6761 9.47187 72.8526C9.47187 71.029 8.71697 69.5508 7.78574 69.5508C6.85451 69.5508 6.09961 71.029 6.09961 72.8526C6.09961 74.6761 6.85451 76.1543 7.78574 76.1543Z" fill="#EF895B" stroke="black" strokeMiterlimit="10" />
        <path d="M2.17993 62.5132L5.30798 64.2509L8.50711 62.5132L11.7062 64.2509L14.9054 62.5132L18.0334 64.2509L21.2325 62.5132L24.4316 64.2509L27.6307 62.5132L30.7588 64.2509L33.9579 62.5132L37.157 64.2509L40.2851 62.5132L43.4842 64.2509L46.6833 62.5132L49.8824 64.2509L53.0105 62.5132L56.2096 64.2509L59.4087 62.5132L62.6079 64.2509L65.807 62.5132" stroke="black" strokeMiterlimit="10" />
        <path d="M1.18726 58.0818L4.43027 59.8195L7.67329 58.0818L10.9163 59.8195L14.2348 58.0818L17.4778 59.8195L20.7208 58.0818L23.9639 59.8195L27.2823 58.0818L30.5253 59.8195L33.7683 58.0818L37.0114 59.8195L40.2544 58.0818L43.5728 59.8195L46.8159 58.0818L50.0589 59.8195L53.3019 58.0818L56.6203 59.8195L59.8634 58.0818L63.1064 59.8195L66.4248 58.0818" stroke="black" strokeMiterlimit="10" />
        <path d="M56.9767 7.51559C56.9767 9.36168 46.4934 10.9001 33.5909 10.9001C20.6884 10.9001 10.205 9.36168 10.205 7.51559C10.205 7.51559 9.47195 4.68491 10.2784 4.31569C13.3574 2.96189 23.2542 4.13109 33.5909 4.13109C43.8543 4.13109 53.8244 3.02343 56.9767 4.37723C57.7831 4.74645 56.9767 7.51559 56.9767 7.51559Z" fill="#EFA65B" stroke="black" strokeMiterlimit="10" />
        <path d="M7.22949 57.8132V57.8132C6.75427 52.1105 10.2511 46.8257 15.6857 45.0335L19.114 43.9029L24.6952 43.1055C26.5702 42.8377 28.2633 41.8396 29.4056 40.3289V40.3289C30.9003 38.3519 31.2695 35.7437 30.382 33.4296L21.7253 10.8577" stroke="black" strokeMiterlimit="10" />
        <path d="M33.591 8.00778C46.5066 8.00778 56.9768 6.49249 56.9768 4.62328C56.9768 2.75406 46.5066 1.23877 33.591 1.23877C20.6753 1.23877 10.2051 2.75406 10.2051 4.62328C10.2051 6.49249 20.6753 8.00778 33.591 8.00778Z" fill="#FF4545" stroke="black" strokeMiterlimit="10" />
        <path d="M54.4652 33.762L54.4927 33.6203L54.5202 33.762C55.181 37.1643 57.8414 39.8247 61.2437 40.4855L61.3854 40.513L61.2437 40.5405C57.8414 41.2013 55.181 43.8617 54.5202 47.264L54.4927 47.4057L54.4652 47.264C53.8044 43.8617 51.144 41.2013 47.7417 40.5405L47.6 40.513L47.7417 40.4855C51.144 39.8247 53.8044 37.1643 54.4652 33.762Z" fill="white" stroke="black" />
      </svg>
    </div>

  )
}
export default DragElem1
