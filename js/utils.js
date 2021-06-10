const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (str, maxLength) => str.length <= maxLength;

const getMixedArray = (elements) => {
  let mixedElements = [];
  mixedElements = elements.slice();
  for (let i = mixedElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixedElements[i], mixedElements[j]] = [mixedElements[j], mixedElements[i]];
  }
  return mixedElements;
};

const getMixedRandomLenghtArray = (elements) => {
  const newArrayLength = getRandomPositiveInteger(0, elements.length);
  let cutElements = [];
  if (newArrayLength !== 0){
    cutElements =  getMixedArray(elements).slice(0, newArrayLength);
  }
  return cutElements;
};

checkStringLength('мимими');

export {getRandomPositiveInteger, getMixedArray, getMixedRandomLenghtArray};
