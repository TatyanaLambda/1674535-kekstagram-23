const getRandomInteger = (min, max) => {
  if (min > max){
    return getRandomInteger(max, min);
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min === max){
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isAllowedStringLength = (str, maxLength) => str.length <= maxLength;

getRandomInteger(1,10);
isAllowedStringLength('Маша ела кашу', 30);
