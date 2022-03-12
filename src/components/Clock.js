import { useEffect, useState } from 'react';
import { Svg0, Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10, Svg11, Svg12, Svg13, Svg14, Svg15, Svg16, Svg17, Svg18, Svg19 } from './icons';
import './Clock.scss'
const days = {
    0: <Svg0 />,
    1: <Svg1 />,
    2: <Svg2 />,
    3: <Svg3 />,
    4: <Svg4 />,
    5: <Svg5 />,
    6: <Svg6 />,
    7: <Svg7 />,
    8: <Svg8 />,
    9: <Svg9 />,
    10: <Svg10 />,
    11: <Svg11 />,
    12: <Svg12 />,
    13: <Svg13 />,
    14: <Svg14 />,
    15: <Svg15 />,
    16: <Svg16 />,
    17: <Svg17 />,
    18: <Svg18 />,
    19: <Svg19 />,
}

export const getNumbers = () => {

    let count = 1;
    let i = 0;
    const numbers = { 0: { a: null, b: 0 } };
    for (let j = 1; j <= 20; j++) {
        if (j === 20) {
            j = 0;
            i++;
        }
        numbers[count] = {
            a: i === 0 ? null : i,
            b: j === 20 ? 0 : j
        };
        count++;
        if (count === 101) {
            break;
        }
    }
    return numbers;
}

const numbers = getNumbers();


const mayanNumbers = Object.entries(numbers)
    .map(([key, value]) =>
        <div className='' >
            <p className="clock-item" > {days[value['a']]} </p>
            <p className="clock-item">{days[value['b']]} </p>
        </div>
    )

const showTime = (setTime) => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    setTime({
        h, m, s
    })
}


function Clock() {

    const [time, setTime] = useState({ h: 0, m: 0, s: 0 })
    useEffect(() => {
        setInterval(() => showTime(setTime), 1000);
    }, []);


    return (
        <div className="grid-container">
            <div className="grid-item">

                {mayanNumbers[time.h]}
            </div>
            <div className="grid-item">
                {mayanNumbers[time.m]}
            </div>
            <div className="grid-item">
                {mayanNumbers[time.s]}
            </div>
            <div className="grid-item">
                {time.h}
            </div>
            <div className="grid-item">
                {time.m}
            </div>
            <div className="grid-item">
                {time.s}
            </div>
        </div >
    )

}

export default Clock;