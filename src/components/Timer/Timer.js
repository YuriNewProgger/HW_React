import React from "react";
import s from "./Timer.module.css";

export default class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.positionSecond = 0;
    this.positionHour = 0;

    this.player = props.Player;
    this.currenMove = props.Current
    this.change = props.Change;
    this.btnSetting = (this.player == this.currenMove()) ? false : true;

    this.state = {
      time: props.Time,
      disabledBtnChange: this.disabledBtnChange
    }

  }


  updateTimer = () => {
    if(this.state.time == 0){
      this.setState(
        {
          disabledBtnChange: true
        });
      return;
    }
    if(this.player != this.currenMove()){
      this.setState(
        {
          disabledBtnChange: true
        });
      return;
    }
    else{
      // if(this.positionSecond == 360){
      //   this.positionSecond = 0;
      // }

      this.positionSecond += 3;
      //this.positionHour += 15;
      this.positionHour += this.positionSecond / 36000;

      this.getArrow();
      this.setState(
        {
          time: this.state.time - 1,
          disabledBtnChange: false
        });
    }
  }

  //Вызываеться при полной отрисовке первый раз.
  componentDidMount() {
    setInterval(this.updateTimer, 1000);
  }
/* Ещё один вариант часов.
  getArrow = () => {
    let arrows = [];
    arrows.push(<rect transform={`rotate(${this.positionSecond} 150 100)`} x="147.5" y="50" width="5" height="50" stroke="black" fill="green" stroke-width="2"/>);
    arrows.push(<rect transform={`rotate(${this.positionHour} 150 100)`} x="147.5" y="70" width="5" height="30" stroke="black" fill="red" stroke-width="2"/>);
    return arrows;
  }

  getTimerField = () => {
    let field = [];

    field.push(<circle cx="150" cy="100" r="80" fill="white"/>);

    
    field.push(<circle cx="150" cy="30" r="5" fill="red"/>);

    field.push(<text font-weight="bold" x="190" y="30">1</text>);
    field.push(<circle cx="185" cy="40" r="5" fill="red"/>);
    field.push(<text font-weight="bold" x="220" y="55">2</text>);
    field.push(<circle cx="210" cy="65" r="5" fill="red"/>);
    field.push(<text font-weight="bold" x="235" y="100">3</text>);
    field.push(<circle cx="220" cy="100" r="5" fill="red"/>);

    field.push(<text font-weight="bold" x="220" y="150">4</text>);
    field.push(<circle cx="210" cy="135" r="5" fill="red"/>);
    field.push(<text font-weight="bold" x="190" y="185">5</text>);
    field.push(<circle cx="185" cy="160" r="5" fill="red"/>);
    field.push(<text font-weight="bold" x="145" y="195">6</text>);
    field.push(<circle cx="150" cy="170" r="5" fill="red"/>);

    field.push(<text font-weight="bold" x="100" y="185">7</text>);
    field.push(<circle cx="150" cy="170" r="5" fill="red"/>);
    field.push(<text font-weight="bold" x="70" y="150">8</text>);
    field.push(<circle cx="115" cy="160" r="5" fill="red"/>);
    field.push(<text font-weight="bold" x="55" y="100">9</text>);
    field.push(<circle cx="90" cy="135" r="5" fill="red"/>);

    field.push(<text font-weight="bold" x="65" y="55">10</text>);
    field.push(<circle cx="80" cy="100" r="5" fill="red"/>);
    field.push(<text font-weight="bold" x="90" y="30">11</text>);
    field.push(<circle cx="90" cy="65" r="5" fill="red"/>);
    field.push(<text font-weight="bold" x="140" y="15">12</text>);
    field.push(<circle cx="115" cy="40" r="5" fill="red"/>);

    return field;
  }*/

  getTimerField = () => {
    let field = [];
    let radius = 100.0025;

    field.push(<circle cx="105" cy="105" r="100" fill="white"/>);

    for (let i = 1; i <= 12; i++) {
      let radAngle = (radius * i);

      let x = Math.ceil(radius * Math.cos(radAngle) + 105);
      let y = Math.ceil(radius * Math.sin(radAngle) + 105);

      console.log(x + " " + y);

      field.push(<circle cx={x} cy={y} r="5" fill="red"/>);
    }

    return field;
  }
  getArrow = () => {
    let arrows = [];
    arrows.push(<rect transform={`rotate(${this.positionSecond} 105 105)`} x="100" y="20" width="2" height="90" stroke="black" fill="green" stroke-width="1"/>);    
    return arrows;
  }

  render() {

    return (
      <div className={s.timer}>
        <h1>
          {(this.state.time == 0) ? this.player + ": " + "Time out" :
          this.player + ": " + (new Date(0, 0, 0, 0, 0, this.state.time)).toLocaleTimeString()
          }
        </h1>
        <button disabled={this.state.disabledBtnChange} onClick={this.change}>Передать ход</button>
        <div style={{margin: '15px'}}>
          {/* <svg version="1.1"
               width="300" height="200"
               viewBox="0 0 300 200" >
            {this.getTimerField()}
            {this.getArrow()}
          </svg> */}

          <svg version="1.1"
               width="200" height="200"
               viewBox="0 0 210 210" >
            {this.getTimerField()}
            {this.getArrow()}
          </svg>
        </div>
      </div>
      );
  }
}


