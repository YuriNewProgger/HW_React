import React from "react";

export default class Timer extends React.Component {

  constructor(props) {
    super(props);

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


  render() {

    return (
      <div className="timer">
        <h1>
          {(this.state.time == 0) ? this.player + ":" + "Time out" :
          this.player + ":" + (new Date(0, 0, 0, 0, 0, this.state.time)).toLocaleTimeString()
          }
        </h1>
        <button disabled={this.state.disabledBtnChange} onClick={this.change}>Передать ход</button>
      </div>
      );
  }
}


