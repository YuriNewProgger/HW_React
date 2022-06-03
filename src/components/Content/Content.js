import React from "react";
import ChessTimer from "../ChessTimer/ChessTimer";
import HWTwo from "../HWTwo/HWTwo";
import { Link, Route, Routes } from "react-router-dom";
import s from './ContentStyle.module.css';

function Content() {
  return (
        <div className={s.contentContainer}>
          <Routes>
            <Route path="/ChessTimer" element={<ChessTimer Time={120}/>}/>
            <Route path="/HWTwo" element={<HWTwo/>}/>
            <Route path="/*" element={<HWTwo/>}/>
          </Routes>
        </div>
  );
}

export default Content;
