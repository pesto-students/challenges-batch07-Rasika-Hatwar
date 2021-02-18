function duplicateLetters(str) {
  const charMap = {};
  for (const char of str){
    if (!charMap[char]){
      charMap[char] = 1;
    }
    else{
      charMap[char] += 1;
    }
  }
  const charCount = Object.values(charMap);
  const maxCount = Math.max(...charCount);
  if(!maxCount || maxCount ===1) return false;

  return maxCount;
}

export {
  duplicateLetters,
};
