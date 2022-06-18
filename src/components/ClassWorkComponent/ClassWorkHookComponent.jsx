import React, { useState } from 'react';
import Column from './ColumnComponent';
import s from './ClassWorkHook.module.css';

function HookComponent(){
    //const [count, setCount] = useState(0);

    let start = (cb) =>{
        cb();
    }

    return(
        <div className={s.field}>
            {/* <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
              Кликни меня!
            </button> */}
            <Column Handler={start} />
            <Column Handler={start}/>
            <Column Handler={start}/>
            <Column Handler={start}/>
            <Column Handler={start}/>
            <Column Handler={start}/>
            <Column Handler={start}/>
        </div>
    );
}

export default HookComponent;
