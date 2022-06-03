import React from 'react';

export default class QuoteOfTheDay extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            text: this.props.Text,
            author : this.props.Author,
            visible : "visible"
        }
    }

    show = () => {
        this.setState(
            {
                visible : "visible"
            }
        );
    }

    hide = () => {
        this.setState(
            {
                visible : "hidden"
            }
        );
    }

    render(){
        return(
            <div>
                <hr />
                <h3>Task 1</h3>
                <q style={{visibility:this.state.visible}}>{this.state.text}</q>
                <br />
                <q style={{visibility:this.state.visible}}>{this.state.author}</q>
                <br />
                <br />
                <button onClick={this.show}>Show</button>
                <button onClick={this.hide}>Hide</button>
                <hr />
            </div>
        );
    }
}