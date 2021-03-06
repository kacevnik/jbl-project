import React, {useEffect} from 'react';
import './Final.css';
import Parallax from 'parallax-js';


function Final({countAllAns}) {

    useEffect(() => {
        new Parallax(document.getElementById('scene-final'));
    });

    let url = ''
    const urlProgect = 'https://medialeaks.ru/igra-smozhesh-li-tyi-ustroit-legendarnuyu-vecherinku/'
    const title = 'Jbl - Спаси свою вечеринку! Мой результат ' + countAllAns + ' из 12! Попробуй и ты!'
    const desc = 'Jbl - Спаси свою вечеринку! Мой результат ' + countAllAns + ' из 12! Попробуй и ты!'
    const pimg = 'https://medialeaks.ru/igra-smozhesh-li-tyi-ustroit-legendarnuyu-vecherinku/'

    const shareVk = () => {
        url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(urlProgect);
		url += '&title='       + encodeURIComponent(title);
		url += '&description=' + encodeURIComponent(desc);
		url += '&image='       + encodeURIComponent(pimg);
		url += '&noparse=true';
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }

    const shareTwitter = () => {
        url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(title);
		url += '&url='      + encodeURIComponent(urlProgect);
        url += '&counturl=' + encodeURIComponent(urlProgect);
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }

    const shareFacebook = () => {
        url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(title);
		url += '&p[summary]='   + encodeURIComponent(desc);
		url += '&p[url]='       + encodeURIComponent(urlProgect);
		url += '&p[images][0]=' + encodeURIComponent(urlProgect);
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }

    let cls = ['level-final']

    if (countAllAns > 4 && countAllAns <= 8) {
        cls.push('bg-2')
    } else if (countAllAns > 8) {
        cls.push('bg-3')
    }

    const reload = () => {
        window.location.reload()
    }

    return (
        <div className={cls.join(' ')}>
            <div id="scene-final">
                <div className="final-jbl-first" data-depth="0"></div>
                <div className="final-jbl-second" data-depth="0.1"></div>
            </div>
            <div className="final-counter">
                    {countAllAns}/12
            </div>
            <div className="social-btns">
                <div className="btn vk" onClick={() => shareVk()}> </div>
                <div className="btn twitter" onClick={() => shareTwitter()}> </div>
                <div className="btn facebook" onClick={() => shareFacebook()}> </div>
            </div>
            <a href="https://ru.jbl.com/JBL+PULSE+4.html?utm_source=medialeaks&utm_medium=sp&utm_campaign=pulse4" className="bay" target="_blank" rel="noopener noreferrer">Купить</a>
            <div className="more" onClick={()=>reload()}>Еще разок</div>
        </div>
    )
}

export default Final;