import React from 'react';
import logo from './img/logo.png';
import './MainJbl.css';

function MainJbl() {

    const AllWidth = 1350;
    let styleMain = {
        width: AllWidth/10.8870968 + 'px',
    }
    return (
        <div className="main-jbl">
            <div className="main-jbl-header">
                <div className="main-jbl-logo" style={styleMain}>
                    <img src={logo} alt="GBL"/>
                    <h1>Игра</h1>
                    <span>Сможешь ли ты устроить легендарную вечеринку?</span>
                </div>
            </div>
            <div className="main-jbl-text">
                <p><strong>Когда устраиваешь вечеринку, надо быть готовым к чему угодно.</strong></p>
                <p>Закончились закуски, гости залипают в телефоны и отказываются танцевать или спорят о том, какой трек должен играть следующим… Как сделать так, чтобы все отлично провели время? Представь, что ты хозяин вечеринки и решать проблемы предстоит именно тебе. Вместе с <span className="red">JBL Pulse 4</span> мы предлагаем тебе проверить свои организаторские способности и устроить незабываемый праздник.</p>
                <h5>Готов как следует оторваться?</h5>
            </div>
            <button>Начать веселье</button>
        </div>
    )
}

export default MainJbl;