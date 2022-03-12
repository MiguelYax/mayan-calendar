import { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap'
import dayFactory from './Days';

const days = dayFactory('10em', '10em');

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