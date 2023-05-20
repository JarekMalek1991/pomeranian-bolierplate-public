import React from 'react';

import { Logo } from '../Components/Logo/Logo';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';



export function AppHeader() {
  return (
    <header>
        <Logo />
        {/* <Logo></Logo> */}
        <HeaderMenu />
    </header>
  );
}
