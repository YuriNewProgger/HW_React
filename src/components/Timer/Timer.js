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
    console.log(this.player);
    if(this.state.time == 0){
      console.log('Player ' + this.player + ' stop ' + ' idTimer ' + this.idTimer);
      clearInterval(this.idTimer);
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
    this.idTimer = setInterval(this.updateTimer, 1000);
  }

  render() {

    return (
      <div className="timer">
        <h1>
          {this.player}: {(new Date(0, 0, 0, 0, 0, this.state.time)).toLocaleTimeString()}
        </h1>
        <button disabled={this.state.disabledBtnChange} onClick={this.change}>Передать ход</button>
      </div>
      );
  }
}


