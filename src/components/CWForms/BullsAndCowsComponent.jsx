import { Component, useState } from "react";
import React from "react";


export default class BullsAndCowsComponent extends React.Component{
    hideNum = 2456;
    constructor(props){
        super(props);

        this.state = {
            nums : [],
            num: null,
            isCorrect : true,
            bull:0,
            cow:0, 
            isWin: false
        };
    }

    change = (e) => {
        let isCor;
        if(!this.checkLength(e.target.value) && this.checkIsNum(parseInt(e.target.value[e.target.value.length - 1])))
            isCor = true;
        else
            isCor = false;

        this.setState({
            num : e.target.value,
            isCorrect : isCor
        });

    }

    checkLength = (param) => {
        return ((parseInt(param) < 1000) || (parseInt(param) > 9999));
    }

    checkIsNum = (param) => {
        return (Number.isInteger(param));
    }

    checkBullsAndCows = () =>{
        let strHideNum = `${this.hideNum}`;
        let strValueFromUser =`${this.state.num}`;
        let countBull = 0;
        let countCow = 0;

        for (let i = 0; i < strHideNum.length; i++) {
            if(strHideNum.includes(strValueFromUser[i])){
                if(strValueFromUser[i] === strHideNum[i]){
                    countBull++;
                    continue;
                }
                countCow++;
            }
        }

        this.setState({
            bull:countBull,
            cow: countCow
        })
    }

    addBull = (item) =>{
        let tmp = this.state.bullItems;
        tmp.push(item);
        this.setState({
            bullItems: tmp
        })
    }

    checkWin = () =>{
        if(this.state.num == this.hideNum)
            this.setState({
                isWin: true
            });
    }

    enterNum = () => {
        if(this.state.isCorrect === true){
            this.checkBullsAndCows();

            let tmpArr = this.state.nums;
            tmpArr.push(this.state.num);

            this.setState({
                nums : tmpArr
            });

            this.checkWin();
        }
            
    }

    render(){
        return(
            <div>
                <div style={
                        {
                            visibility : this.state.isWin ? "visible" : "hidden",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            textAlign: "center",
                            fontSize:"2em",
                            fontWeight: "bold"
                        }
                    }>
                    Вы выиграли!
                </div>
                <div style={{visibility : this.state.isWin ? "hidden" : "visible"}}>
                    <h1>Угадай число</h1>
                    <ul>
                        {this.state.nums.map(item => (<li key={item}>{item}</li>))}
                    </ul>
                    <p>Cows:{this.state.cow} Bulls:{this.state.bull}</p>
                    <input type="text" value={this.num} onChange={this.change} style={{backgroundColor: this.state.isCorrect ? "transparent" : "red"}}/>
                    <button onClick={this.enterNum}>Try</button>
                </div>
            </div>
        );
    }
}
