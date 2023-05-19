import React, {useState} from 'react';

import './style.css';

export function Blok9() {
  const [ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('Kliknij')

  function clickHandler() {
    const nowa_ilosc = ilosc+1
    setIlosc(nowa_ilosc)
    setText('kliknieto ' + nowa_ilosc + 'razy')

    if ( nowa_ilosc==5 ) {
        setText('gratulacje wyklikales przycisk')
    } 
  }
  return (
    <div>
      <h2>Kliknij 5</h2>
      <button onClick={clickHandler} className='ifbtn'>{text}</button>
    </div>
  );
}
