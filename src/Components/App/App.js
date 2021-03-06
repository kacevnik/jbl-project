import React, { useState } from 'react';
import { Context } from '../../context';
import '../../fonts/Gordita-Regular.ttf';
import './App.css';
import CanvasJbl from '../CanvasJbl';
import sound from './img/disco.wav'
import soundEvent from './img/event.wav'

const Sound = ({url, stateSound}) => {

  return (
    <audio src={url} loop type="audio/wav" autoPlay muted={!stateSound}></audio>
  )
}

function App() {

  const getGLobalWidth = () => {

    const screens = {
      w667: 595,
      w640: 572,
      w731: 653,
      w823: 653,
      w568: 507,
      w736: 658,
      w812: 596,
    }

    if (screens.hasOwnProperty('w' + window.innerWidth)){
      return screens['w' + window.innerWidth]
    }

    if (window.innerWidth / window.innerHeight > 1.62650602) {
      let w = (window.innerHeight - window.innerWidth / 56.25 * 2) * 1.62650602;
      return w < 1350 ? w : 1350;
    }
    return window.innerWidth >= 1350 ? 1350 : window.innerWidth - window.innerWidth / 56.25 * 2;
  }

  const getGlobalScreen = () => {
    return window.innerHeight > window.innerWidth ? true : false
  }

  const [globalWidth, setGlobalWidth] = useState(getGLobalWidth());
  const [turnScreen, setTurnScreen] = useState(getGlobalScreen());
  const [countAllAns, setCountAllAns] = useState(0);
  const [room1Count, setRoom1Count] = useState(0);
  const [room2Count, setRoom2Count] = useState(0);
  const [room3Count, setRoom3Count] = useState(0);
  const [columnOn, setColumnOn] = useState(false);
  const [romm1Finish, setRomm1Finish] = useState(false)
  const [room3Finish, setRomm3Finish] = useState(false)
  const [showMainMsg, setShowMainMsg] = useState(false)
  const [showRoomMainMsg, setShowRoomMainMsg] = useState(false)
  const [showRoomMainMsgSt, setShowRoomMainMsgSt] = useState(true)
  const [messages, setMessages] = useState(false)
  const [glasses, setGlasses] = useState(1)
  const [roomHints, setRoomHints] = useState([
    { name: 'msg-1', id: 'vaza' },
    { name: 'msg-2', id: 'ball-1' },
    { name: 'msg-3', id: 'column' },
    { name: 'msg-4', id: 'btn-on-off' },
    { name: 'msg-5', id: 'btn-light' },
    { name: 'msg-6', id: 'mop' },
    { name: 'msg-8', id: 'glass-1' },
    { name: 'msg-9', id: 'cheptos' },
    { name: 'msg-7', id: 'column-elem' },
    { name: 'msg-12', id: 'key-elem' },
    { name: 'msg-13', id: 'paper' },
    { name: 'msg-14', id: 'btn-washer' },
    { name: 'msg-10', id: 'error-1' },
    { name: 'msg-11', id: 'error-2' },
  ])
  const [hidePuddle, setHidePuddle] = useState(false)
  const [room2BgColumn, setRoom2BgColumn] = useState(false)
  const [room2BgCheptos, setRoom2BgCheptos] = useState(false)
  const [soundApp, setSoundApp] = useState(false)
  const [soundAppAnime, setSoundAppAnime] = useState(true)
  const [hideWater, setHideWater] = useState(false)
  const [hintRotateElem, setHintRotateElem] = useState(false)

  const chengeRoom1Count = (name) => {
    let c = room1Count + 1
    let a = countAllAns + 1
    setRoom1Count(c);
    setCountAllAns(a)
    setMessages(false)
    setMessages(name)
    setRoomHints(roomHints.filter(el => el.name !== name))
    if(soundApp){
      new Audio(soundEvent).play()
    }
  }

  const chengeRoom2Count = (name) => {
    let c = room2Count + 1
    let a = countAllAns + 1
    setRoom2Count(c);
    setCountAllAns(a)
    setMessages(false)
    setMessages(name)
    setRoomHints(roomHints.filter(el => el.name !== name))
    if(soundApp){
      new Audio(soundEvent).play()
    }
  }

  const chengeRoom3Count = (name) => {
    let c = room3Count + 1
    let a = countAllAns + 1
    setRoom3Count(c);
    setCountAllAns(a)
    setMessages(false)
    setMessages(name)
    setRoomHints(roomHints.filter(el => el.name !== name))
    if(soundApp){
      new Audio(soundEvent).play()
    }
  }

  const onKeyElemHendler = (name) => {
    chengeRoom3Count(name)
    setHideWater(!hideWater)
  }

  const onHidePuddle = (name) => {
    chengeRoom2Count(name)
    setHidePuddle(true)
  }

  const chengeRoom2BgColumn = (name) => {
    if (room2Count === 3) {
      chengeRoom2Count(name)
      setRoom2BgColumn(true)
    } else {
      setMessages('msg-11')
    }
  }

  const chengeRoom2BgCheptos = (name) => {
    chengeRoom2Count(name)
    setRoom2BgCheptos(true)
  }

  const onBtnSountd = () => {
    setSoundApp(!soundApp)
    setSoundAppAnime(false)
  }

  const chengeCoutnGlasses = () => {
    setGlasses(glasses + 1)
    if (glasses === 2) {
      chengeRoom2Count('msg-8')
    }
  }

  window.addEventListener("resize", () => {
    setGlobalWidth(getGLobalWidth())
    setTurnScreen(getGlobalScreen())
  })

  const appStyle = {
    fontSize: globalWidth / 56.25
  }

  const [level, setLevel] = useState(['start', 'level-1', 'level-2', 'level-3', 'final']);

  const changeLevel = () => {
    let count = 0
    if (level[1] === 'level-2') {
      count = 5 - room1Count
    } else if (level[1] === 'level-3') {
      count = 4 - room2Count
    } else {
      count = 0
    }

    setRoomHints(roomHints.filter((el, idx) => {
      return idx + 1 > count
    }))
    setLevel(level.filter((ex, i) => i > 0));
    if (level[1] === 'level-1') {
      setShowMainMsg(true)
    } else {
      setShowRoomMainMsg('show')
    }

    if(level[1] === 'final') {
      setSoundApp(false)
    }
  }

  const [countBall, setCountBall] = useState(1)
  const counterBalls = () => {
    const c = countBall + 1;
    setCountBall(c)
    if (countBall === 5) {
      chengeRoom1Count('msg-2')
    }
  }

  const [displayBtnTVOff, setbtnTVOff] = useState(true)

  const btnTVOff = () => {
    chengeRoom1Count('msg-4')
    setbtnTVOff(false)
  }

  const btnLightOff = () => {
    if (room1Count === 4) {
      chengeRoom1Count('msg-5')
      setRomm1Finish(true)
    } else {
      setMessages('msg-10')
    }
  }

  const onBtnWasher = () => {
    if (room3Count === 2) {
      chengeRoom3Count('msg-14')
      setRomm3Finish(true)
    } else {
      setMessages('msg-15')
    }
  }

  const hendlerColumnOnn = () => {
    chengeRoom1Count('msg-3')
    setColumnOn(true)
  }

  const onHideMainMsg = (e) => {
    e.preventDefault()
    setShowMainMsg(false)
    if(level[0] === 'level-1' && showRoomMainMsgSt){
      setShowRoomMainMsgSt(false)
      setShowRoomMainMsg('show')
    }
  }

  const onBtnShowRules = () => {
    setShowMainMsg(true)
    setShowRoomMainMsg(false)
  }

  const chengeStateMessage = (name) => {
    setShowRoomMainMsg(name)
    setMessages(name)
  }

  const ononBtnShowRules = () => {
    if (roomHints.length > 0) {
      setHintRotateElem(roomHints[0].id)
    }
  }

  return (
    <Context.Provider value={{
      setGlobalWidth, changeLevel, counterBalls, chengeRoom1Count, btnTVOff, btnLightOff, hendlerColumnOnn, onHideMainMsg, onBtnShowRules, chengeStateMessage, ononBtnShowRules, chengeRoom2BgColumn, onHidePuddle, chengeCoutnGlasses, chengeRoom2BgCheptos, onBtnSountd, chengeRoom3Count, onBtnWasher, onKeyElemHendler, setHintRotateElem, setShowRoomMainMsg
    }}>
      <div className="App" style={appStyle}>
        <Sound url={sound} stateSound={soundApp}/>
        <CanvasJbl
          globalWidth={globalWidth}
          level={level[0]}
          roomcount1={room1Count}
          roomcount2={room2Count}
          roomcount3={room3Count}
          displayBtnTVOff={displayBtnTVOff}
          columnOn={columnOn}
          room1Finish={romm1Finish}
          showMainMsg={showMainMsg}
          showRoomMainMsg={showRoomMainMsg}
          messages={messages}
          hidePuddle={hidePuddle}
          room2BgColumn={room2BgColumn}
          room2BgCheptos={room2BgCheptos}
          soundApp={soundApp}
          room3Finish={room3Finish}
          hideWater={hideWater}
          countAllAns={countAllAns}
          turnScreen={turnScreen}
          soundAppAnime={soundAppAnime}
          hintRotateElem={hintRotateElem}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
