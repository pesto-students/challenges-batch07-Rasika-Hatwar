function abbreviateString(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
      }
    let splitInput = str.trim().split(" ");
    if (splitInput.length > 1) {
        return (splitInput[0] + " " + splitInput[splitInput.length-1].charAt(0).toUpperCase() + ".");
    }
    return splitInput[0];
}

export { abbreviateString };
