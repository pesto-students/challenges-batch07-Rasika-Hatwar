function balancedBraces(str) {
  const bracket = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (const char of str) {
    if (bracket[char]) {
      stack.push(char);
    } else if (Object.values(bracket).includes(char) && char !== bracket[stack.pop()]) {
      return false;
    }
  }
  return !stack.length;
}

export {
  balancedBraces,
};
