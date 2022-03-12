import { useEffect, useState } from 'react';
import { Svg0, Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10, Svg11, Svg12, Svg13, Svg14, Svg15, Svg16, Svg17, Svg18, Svg19 } from './icons';
import { Card, CardGroup } from 'react-bootstrap'

const size = {
    width: '10em',
    height: '10em'
}
const days = {
    0: <Svg0 {...size} />,
    1: <Svg1 {...size} />,
    2: <Svg2 {...size} />,
    3: <Svg3 {...size} />,
    4: <Svg4 {...size} />,
    5: <Svg5 {...size} />,
    6: <Svg6 {...size} />,
    7: <Svg7 {...size} />,
    8: <Svg8 {...size} />,
    9: <Svg9 {...size} />,
    10: <Svg10 {...size} />,
    11: <Svg11 {...size} />,
    12: <Svg12 {...size} />,
    13: <Svg13 {...size} />,
    14: <Svg14 {...size} />,
    15: <Svg15 {...size} />,
    16: <Svg16 {...size} />,
    17: <Svg17 {...size} />,
    18: <Svg18 {...size} />,
    19: <Svg19 {...size} />,
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
    .map(([, value], i) =>
        <Card style={{ width: "18rem" }}>
            <Card.Body>{days[value['a']]}</Card.Body>
            <Card.Footer>{days[value['b']]}</Card.Footer>
        </Card>
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
        <CardGroup>
            {mayanNumbers[time.h]}
            {mayanNumbers[time.m]}
            {mayanNumbers[time.s]}
        </CardGroup>
    )

}

export default Clock;