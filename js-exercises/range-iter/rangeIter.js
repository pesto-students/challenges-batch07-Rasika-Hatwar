function rangeIterable(lb, ub) {
  return {
    [Symbol.iterator]() {
      let firstElement = lb;
      return {
        next() {
          return {
            done: firstElement > ub,
            // eslint-disable-next-line no-plusplus
            value: firstElement++,
          };
        },
      };
    },
  };
}

function rangeIter(lb, ub) {
  if (
    ub === undefined ||
    typeof ub !== "number" ||
    lb === undefined ||
    typeof lb !== "number"
  ) {
    throw new TypeError("undefined is not a number");
  }
  return rangeIterable(lb, ub);
}
export { rangeIter };
