function curry(fn) {
  const curryFunction = (...args) => {
    if (fn.length <= args.length) {
      return fn(...args);
    }
    return (...moreArgs) => curryFunction(...args, ...moreArgs);
  };
  return curryFunction;
}
export { curry };
