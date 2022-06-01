import React from "react";
import s from './NavStyle.module.css';

function Nav() {
  return (
    <nav className={s.navContainer}>
      <h1>Навигация временно не работает</h1>
      <a href="/ChessTimer">Chess Timer (Class Work)</a>
      <a href="/HWTwo">HW2</a>
    </nav>
  );
}

export default Nav;
