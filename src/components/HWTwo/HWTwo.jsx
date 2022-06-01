import React from "react";
import QuoteOfTheDay from "./TaskOne/QouteOfTheDay";
import NumberGenerator from "./TaskThree/NUmberGenerator";
import ForecastBall from "./TaskTwo/ForecastBall";

function HWTwo() {
  return (
    <div>
      <QuoteOfTheDay Text={"Сегодня ты делаешь код, завтра код делает тебе деньги"} Author={"Стив Джобс"}/>
      <ForecastBall/>
      <NumberGenerator NumberStart={25} NumberEnd={50}/>
    </div>
  );
}

export default HWTwo;
