import React from "react";
import Timer from "../Timer";

export default class ChessTimer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      time: props.Time,
      currentPlayer: 0
    };
  }

  change = () => {
    this.setState(
    {
      currentPlayer: Math.abs(1 - this.state.currentPlayer)
    });
  }

  getCurrentPlayer = () => {
    return this.state.currentPlayer;
  }


  render(){
      return (
        <div>
            <Timer Player={0} Time={this.state.time} Update={this.updateTimer} Current={this.getCurrentPlayer} Change={this.change}/>
            <br/>
            <Timer Player={1} Time={this.state.time} Update={this.updateTimer} Current={this.getCurrentPlayer} Change={this.change}/>
        </div>
      );
  }
}
