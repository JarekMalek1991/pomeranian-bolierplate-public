import React, { useState } from 'react';

import './style.css';

export function Blok9() {
  const [ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('Kliknij');
  const [isClicked5, setClicked5] = useState(true);
  const [pokaz, setPokaz] = useState(false);
  const [liczba, setliczba] = useState('Podaj liczbę');
  const [text1, setText1] = useState('Nie');

  const [argA, setArgA] = useState(0);
  const [argB, setArgB] = useState(0);
  const [odpowiedz, setodpowiedz] = useState('Nie');

  function clickHandler() {
    const nowa_ilosc = ilosc + 1;
    setIlosc(nowa_ilosc);

    if (nowa_ilosc == 5) {
      setClicked5(true);
      setText('gratulacje wyklikales przycisk');
    } else {
      setText('kliknieto ' + nowa_ilosc + 'razy');
    }
  }

  function clickHandler2(ev) {
    setPokaz(!pokaz)
  }
  function clickHandler3(ev) {
    setliczba(ev.target.value)
    if (parseFloat(ev.target.value) > 10) {
      setText1('Tak');
    } else {
      setText1('Nie');
    }
  }
  function handlerA(ev) {
    setArgA(ev.target.value)
  }
  function handlerB(ev) {
    setArgB(ev.target.value)
  }
  return (
    <div>
      <h2>Kliknij 5</h2>

      <button onClick={clickHandler} className="ifbtn">
        {text}
      </button>
      {isClicked5 && <h2>Kliknąłeś więcej niż 5 razy</h2>}
      <hr></hr>

      <button onClick={clickHandler2} className="ifbtn">
        Ukryj/pokaz
      </button>
      {pokaz && <p>Teraz mnie widac</p>}
      <hr></hr>
      
      <h2>Czy A jest większe od 10?</h2>
      <br></br>
      <input value={liczba}onChange={clickHandler3}></input>
      <br/>
      {text1}
      <hr></hr>
      <h2>Czy A jest większe od B?</h2>
      <input value={argA} onChange={handlerA} placeholder='A' /><br />
      <input value={argB} onChange={handlerB} placeholder='B' />
      {odpowiedz}
    </div>
  );
}
