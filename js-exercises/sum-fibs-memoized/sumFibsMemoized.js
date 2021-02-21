function sumFibs(num) {
  if (num <= 0) return 0;
  if (num === 1) return 2;
  const fibonacciNums = [1, 1];
  let nextFibonacciNums = fibonacciNums[fibonacciNums.length - 1]
   + fibonacciNums[fibonacciNums.length - 2];
  while (nextFibonacciNums <= num) {
    fibonacciNums.push(nextFibonacciNums);
    nextFibonacciNums = fibonacciNums[fibonacciNums.length - 1]
    + fibonacciNums[fibonacciNums.length - 2];
  }
  // eslint-disable-next-line no-shadow
  const addFibonacciNums = fibonacciNums.filter((fibonacciNums) => fibonacciNums % 2 !== 0);
  // eslint-disable-next-line no-shadow
  return addFibonacciNums.reduce((sum, fibonacciNums) => sum + fibonacciNums, 0);
}

function cacheFunction(fn) {
  const cache = new Map();

  return function cachedFunction(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

export { sumFibs, cacheFunction };
