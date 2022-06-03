import React from "react";
import QuoteOfTheDay from "./TaskOne/QouteOfTheDay";
import NumberGenerator from "./TaskThree/NUmberGenerator";
import ForecastBall from "./TaskTwo/ForecastBall";

function HWTwo() {
  return (
    <div>
      <h1>HW 2</h1>
      <QuoteOfTheDay Text={"Сегодня ты делаешь код, завтра код делает тебе деньги"} Author={"Стив Джобс"}/>
      <ForecastBall/>
      <NumberGenerator NumberStart={25} NumberEnd={50}/>
    </div>
  );
}

export default HWTwo;
