import './styles.css';
import React, { useState } from 'react';
import { SettingIcon } from '../../Components/Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';

export const HeaderMenu = (props) => {
  const { buttonMenu, paragraphMenu, spanMenu } = props;
  const [isArrowClicked, setArrowClicked] = useState(false);
  function clickArrowInHeaderMenu() {
    setArrowClicked(!isArrowClicked);
  }
  return (
    <div className="images-container">
      <SettingIcon />
      <div className="circular_image">
        <img src="http://placekitten.com/500/500" alt="kitty" />
      </div>
      <div className="name-surname-container">
        <h4>Jarosław Malek</h4>
        <h5>Kursant</h5>
      </div>
      <button onClick={clickArrowInHeaderMenu} className="header-button-arrow">
        <MenuArrow className="menu-arrow" />
      </button>
      {isArrowClicked && (
        <div className="header-hiding-div">
          <button className="header-button-log-in">Zaloguj się</button>
          <p className="header-question">
            Nie masz konta? {''}
            <span className="header-button-register">Zarejestruj się</span>
          </p>
        </div>
      )}
    </div>
  );
};

