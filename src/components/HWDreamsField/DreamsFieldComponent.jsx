import Drum from './DrumComponent';
import Word from './WordComponent';
import s from './DreamField.module.css';
import photo from './../../img/photoP.png';
import { useState } from 'react';

export default function DreamsField(){
    const word = "WORKER";
    const wordStart = (10 / 2) - (word.length / 2);

    const [userSymb, setUserSymb] = useState();
    const [arr, setValue] = useState(Factory(wordStart, word, null));

    const handlerEnterSymb = (e) => {
        if(e.nativeEvent.data.length == 1){
            setUserSymb(e.nativeEvent.data);
        }
    }

    const handlerSayLetter = (e) =>{
        if(word.includes(userSymb)){
            setValue(Check(arr, userSymb));
        }
    }

    return(
        <div>
            <div className={s.mainDisplay}>
                {arr}
            </div>
            <div className={s.subDisplay}>
                <Drum />
                <div className={s.controls}>
                    <p>Введите букву</p>
                    <input type="text" value={userSymb} onChange={handlerEnterSymb}/>
                    <br />
                    <button onClick={handlerSayLetter}>Назвать букву</button>
                    <br />
                    <button>Назвать слово</button>
                    <br />
                    <button>Крутить барабан</button>
                </div>
                <img src={photo} alt="" />
            </div>
        </div>
    );
}

function Factory(_start, _word, _letter){
    const arr = [];
    const start = Math.floor(_start);
    const word = _word;

    for (let i = 0; i < 10; i++) {

        if(i >= start && i - word.length <= 2)
            arr.push(<Word key={i} Symb={word[i-start]} IsVisible={false}/>)
        else
            arr.push(<Word key={i} Symb="" IsVisible={false}/>);
    }

    return arr;
}

function Check(_arr, _letter){
    const newArr = [];
    for (let i = 0; i < _arr.length; i++) {

        if(_letter != null && _arr[i].props.Symb == _letter){
            newArr.push(<Word key={i} Symb={_letter} IsVisible={true}/>);
        }
        else{
            newArr.push(_arr[i]);
        }
    }

    return newArr;
}
