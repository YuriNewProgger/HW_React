import Drum from './DrumComponent';
import Word from './WordComponent';

export default function DreamsField(){
    return(
        <div>
            Dreams field
            <Word Str="word"/>
            <Drum/>
        </div>
    );
}

