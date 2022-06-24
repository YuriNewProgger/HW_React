import React from "react";
import ChessTimer from "../ChessTimer/ChessTimer";
import HWTwo from "../HWTwo/HWTwo";
import { Link, Route, Routes } from "react-router-dom";
import s from './ContentStyle.module.css';
import HookComponent from "../ClassWorkComponent/ClassWorkHookComponent";
import BullsAndCowsComponent from "../CWForms/BullsAndCowsComponent";
import DreamsField from "../HWDreamsField/DreamsFieldComponent";

function Content() {
  return (
        <div className={s.contentContainer}>
          <Routes>
            <Route path="/ChessTimer" element={<ChessTimer Time={180}/>}/>
            <Route path="/HWTwo" element={<HWTwo/>}/>
            <Route path="/ClassWorkHookComponent" element={<HookComponent/>}/>
            <Route path="/BullsAndCowsComponent" element={<BullsAndCowsComponent/>}/>
            <Route path="/DreamsFieldComponent" element={<DreamsField/>}/>
            <Route path="/*" element={<HWTwo/>}/>
          </Routes>
        </div>
  );
}

export default Content;
