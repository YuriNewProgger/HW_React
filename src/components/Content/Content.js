import React from "react";
import ChessTimer from "../ChessTimer/ChessTimer";
import HWTwo from "../HWTwo/HWTwo";
import s from './ContentStyle.module.css';

function Content() {
  return (
        <div className={s.contentContainer}>
          {/* <ChessTimer Time={3}/>  */}
          <HWTwo/>
        </div>
  );
}

export default Content;
