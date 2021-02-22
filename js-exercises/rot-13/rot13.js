function rot13(str) {
  let outputString = '';
  for (const char of str) {
    const asciiNumber = char.charCodeAt();
    if (asciiNumber >= 65 && asciiNumber <= 77) {
      outputString += String.fromCharCode(asciiNumber + 13);
    } else if (asciiNumber >= 78 && asciiNumber <= 90) {
      outputString += String.fromCharCode(asciiNumber - 13);
    } else {
      outputString += char;
    }
  }
  return outputString;
}

export {
  rot13,
};
