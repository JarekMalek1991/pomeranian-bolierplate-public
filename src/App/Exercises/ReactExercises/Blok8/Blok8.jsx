import React, { useState } from 'react';


import './style.css';

export function Blok8() {

  const wartosc = "5"

  const [ilosc, setIlosc] = useState(0);

  function clickHandler (ev) {
    // console.log('Kliknięto przycisk', ev)
    // alert('kliknięto przycisk')
    setIlosc(ilosc+1)
  }

  return (
    <div>
      {/* <p onClick={clickHandler} >Przykład blok 8</p>
      <button onClick={clickHandler} type="button'">Przycisk</button>
      <p>
        {wartosc *2}
      </p> */}
      <h2>Cześć</h2>
      <button className='btn' onClick={clickHandler} type="button'">Kliknięto mnie {ilosc} razy</button>
      {/* <span className='btn'>Nie kliknięto we mnie</span> */}
    </div>
  );
}
