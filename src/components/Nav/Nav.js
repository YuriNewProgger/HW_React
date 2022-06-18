import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ChessTimer from "../ChessTimer/ChessTimer";
import HWTwo from "../HWTwo/HWTwo";
import s from './NavStyle.module.css';

function Nav() {
  return (
      <nav className={s.navContainer}>
        <h3>Навигация</h3>
        <NavLink to="/ChessTimer">Chess Timer (Class Work)</NavLink>
        <NavLink to="/HWTwo">HW2</NavLink>
        <NavLink to="/ClassWorkHookComponent">Class work Hook 10.06.2022</NavLink>
        <NavLink to="/BullsAndCowsComponent">Class work 17.06.2022 Bulls and Cows</NavLink>
      </nav>
  );
}

export default Nav;
