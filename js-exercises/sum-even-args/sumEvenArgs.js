function sumEvenArgs(...args) {
  let sum = 0;
  for (const arg of args) {
    if (arg % 2 === 0) {
      sum += arg;
    }
  }
  return sum;
}

export { sumEvenArgs };
