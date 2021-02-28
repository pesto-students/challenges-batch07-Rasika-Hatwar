function chunkArrayInGroups(array, chunkSize) {
  const numberOfChunks = Math.ceil(array.length / chunkSize);
  let chunks = new Array(numberOfChunks).fill(0);
  chunks = chunks.map((_, index) => chunkSize * index);
  chunks = chunks.map((element) => [element, element + chunkSize]);
  chunks = chunks.map(([startIndex, endIndex]) => array.slice(startIndex, endIndex));

  return chunks;
}

export {
  chunkArrayInGroups,
};
