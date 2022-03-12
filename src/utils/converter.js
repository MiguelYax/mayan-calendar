

export const getNumbers = () => {

    let count = 1;
    let i = 0;
    const numbers = { 0: { a: 0, b: 0 } };
    for (let j = 1; j <= 20; j++) {
        if (j === 20) {
            j = 0;
            i++;
        }
        numbers[count] = {
            a: i,
            b: j === 20 ? 0 : j
        };
        count++;
        if (count === 101) {
            break;
        }
    }
}

