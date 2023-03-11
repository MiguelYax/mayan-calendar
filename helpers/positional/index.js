export const getNumbers = () => {
  let count = 1;
  let i = 0;
  const numbers = { 0: { a: 0, b: 0 } };
  for (let j = 1; j <= 20; j += 1) {
    if (j === 20) {
      j = 0;
      i += 1;
    }
    numbers[count] = {
      a: i,
      b: j === 20 ? 0 : j,
    };
    count += 1;
    if (count === 101) {
      break;
    }
  }
};

export default getNumbers;
