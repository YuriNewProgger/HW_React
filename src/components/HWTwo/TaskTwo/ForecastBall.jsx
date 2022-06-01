import React, { useState } from 'react';
import s from './ForecastBall.module.css';

let ForecastBall = () => {
    let anwers = [
        "Бесспорно", 
        "Предрешено",
        "Никаких сомнений",
        "Определённо да",
        "Можешь быть уверен в этом",
        "Мне кажется — «да»",
        "Вероятнее всего",
        "Хорошие перспективы",
        "Знаки говорят — «да»",
        "Да",
        "Пока не ясно, попробуй снова",
        "Спроси позже",
        "Сейчас нельзя предсказать",
        "Сконцентрируйся и спроси опять",
        "Даже не думай",
        "Мой ответ — «нет»",
        "Перспективы не очень хорошие",
        "Весьма сомнительно",
        "По моим данным — «нет»"
    ]

    let [answer, setAnswer] = useState("Задай вопрос вслух");

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const getAnswer = () =>{
        setAnswer(anwers[getRandomInt(anwers.length-1)]);
    }

    return (
        <div className={s.outterContainer}>
            <h1>Task 2</h1>
            <div className={s.ball}>
                <div className={s.innerContent}>
                    <div className={s.reactangle}>
                        <p>{answer}</p>
                    </div>
                </div>                
            </div>
            <button onClick={getAnswer}>Получить ответ</button>
        </div>
    );
}

export default ForecastBall