import { useState } from 'react';
import s from './WordComponent.module.css';

export default function Word(props){
    const symb = props.Symb;
    const isVisible = props.IsVisible;


    return (
        <div className={s.char}
            style={
                {
                    backgroundColor : isVisible == true ? "white" : "black"
                }
            }>{symb}</div>
    );
}
