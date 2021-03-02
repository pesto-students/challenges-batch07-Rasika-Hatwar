function debounce(fn, debounceTime) {
  let timeout;
  if (timeout) {
    clearTimeout(timeout);
  }
  // eslint-disable-next-line func-names
  return function (...args) {
    timeout = setTimeout(() => {
      fn(...args);
    }, debounceTime);
  };
}

export { debounce };
