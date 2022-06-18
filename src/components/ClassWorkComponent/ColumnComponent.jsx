import React, { useState } from 'react';

function Column(props){
    let [heigh, setIncrement] = useState(25);
    let q = heigh;

    let timer = () => {
        setTimeout(() => {
            setIncrement(heigh + 25);
        }, 1500);
    };

    timer();

    let decrement = () =>{
        setIncrement(heigh = heigh - 25);
    }

    return(
        <div onClick={decrement} style={{'width':'25px', 'border' : '1px solid black', 'height' : heigh, 'backgroundColor':'greenyellow'}}>
        </div>
    );
}

export default Column;
