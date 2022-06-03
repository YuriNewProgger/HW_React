import { useState } from "react";


let NumberGenerator = (props) =>{
    let [rnd, getRnd] = useState(0);

    let getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let getRandom = () =>{
        getRnd(getRandomInt(props.NumberStart, props.NumberEnd))
    }

    return(
        <div>
            <h3>Task 3</h3>
            <p>{rnd}</p>
            <button onClick={getRandom}>Получить рандомное число</button>
        </div>
    )
}

export default NumberGenerator;