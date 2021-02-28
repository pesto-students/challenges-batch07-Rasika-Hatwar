const deepCopyObject = (objToCopy) => {
  if (!objToCopy) return objToCopy;
  if (typeof objToCopy !== 'object') return objToCopy;
  let entries = Object.entries(objToCopy);
  entries = entries.map(([key, value]) => [key, deepCopyObject(value)]);
  const result = Object.fromEntries(entries);
  return result;
};

export { deepCopyObject };
