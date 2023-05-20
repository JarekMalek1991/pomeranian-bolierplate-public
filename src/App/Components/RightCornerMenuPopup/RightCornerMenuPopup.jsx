import './styles.css';
import { ReactComponent as MenuArrow } from '../Icons/MenuArrow';
import { ReactComponent as LoginIcon } from '../RightCornerMenuPopup/login.svg';

export function RightCornerMenuPopup() {
  return (
    <div className="container">
      <LoginIcon alt="Zaloguj się" />
      <a href="0">
        <div className="menu-arrow">
          <MenuArrow alt="Ikona strzałki" />
        </div>
      </a>
      <div className="popup">
        <p>Zaloguj się</p>
        <p>Nie masz konta? Zarejestruj się</p>
      </div>
    </div>
  );
}
