import Word from "./WordComponent";


export default function Drum(){


    return(
        <div>
            <svg version="1.1"
               width="500" height="500"
               viewBox="-250 -250 500 500" >
                {Fill()}
          </svg>
        </div>
    )
}

function Fill(){
    let arr = [];
    let angle = 30;
    let radius = 240;
    let radB = 260;

    arr.push(<circle key={0} cx="0" cy="0" r="243" fill="black"/>)


    for (let i = 1; i <= 12; i++) {
        let radAngle = (angle * i) * (Math.PI/180);
        let x = radius * Math.cos(radAngle);
        let y = radius * Math.sin(radAngle);

        let sradAngle = (angle * (i + 1)) * (Math.PI/180);
        let sx = radius * Math.cos(sradAngle);
        let sy = radius * Math.sin(sradAngle);

        let qradAngle = (angle * i) * (Math.PI/180);
        let qx = radB * Math.cos(qradAngle);
        let qy = radB * Math.sin(qradAngle);

        let p = `M 0,0 L${x},${y} Q${x},${y} ${sx},${sy} z`;

        if(i % 2 == 0)
            arr.push(<path key={i+1} d={p} fill="white" stroke="black" strokeWidth="1"/>);
        else
            arr.push(<path key={i+1} d={p} fill="black" stroke="black" strokeWidth="1"/>);
        
    }

    return arr;
}