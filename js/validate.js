const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const textHashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const checkUnicalElements = function(arr) {
  const set = new Set();
  for (const item of arr) {
    if (set.has(item)) {
      return false;
    }
    set.add(item);
  }
  return true;
};

const pushErrorMessage = function (errorMessage, errorMessages) {
  if (errorMessages.indexOf(errorMessage) === -1) {
    errorMessages.push(errorMessage);
  }
  return errorMessages;
};

const validateHashtags = function (hashtags) {
  const HASHTAG_REGULAR = /^([#]{1})([0-9a-zа-яё]{1,19})$/g;
  const errorMessages = [];
  const hashtagCount = hashtags.length;
  if (hashtagCount>MAX_HASHTAG_COUNT){
    pushErrorMessage('Нельзя указывать больше пяти хэш-тегов', errorMessages);
  }
  if (!checkUnicalElements(hashtags)){
    pushErrorMessage('Все хэштеги должны быть уникальными', errorMessages);
  }
  hashtags.forEach((hashtag) => {
    if (!hashtag.startsWith('#')) {
      pushErrorMessage('Хеш-тег должен начинаться с символа решетки (#).', errorMessages);
    } else if (hashtag.length === 2) {
      pushErrorMessage('Хеш-тег не может состоять из одного символа.', errorMessages);
    } else if (hashtag.length > MAX_HASHTAG_LENGTH) {
      pushErrorMessage(`Хеш-тег не может состоять из более чем ${MAX_HASHTAG_LENGTH} символов.`, errorMessages);
    } else if(!hashtag.match(HASHTAG_REGULAR)){
      pushErrorMessage('Хеш-тег должен состоять только из букв и цифр', errorMessages);
    } else{
      textDescription.setCustomValidity('');
    }
  });
  return errorMessages;
};

textHashtag.addEventListener('input', () =>{
  const textHashtagLowerCase = textHashtag.value.toLowerCase();
  const hashtagsWithSpace =  textHashtagLowerCase.replace(/ +/g, ' ').trim();
  const hashtags = hashtagsWithSpace.split(' ');
  const errorMessages = validateHashtags(hashtags);
  if (errorMessages.length !== 0) {
    textHashtag.setCustomValidity(errorMessages.join(' \n'));
    textHashtag.style.border = '2px solid #e90000';
  } else {
    textHashtag.setCustomValidity('');
    textHashtag.style.border = '';
  }
  textHashtag.reportValidity();
});

textDescription.addEventListener('input', () => {
  const valueLength = textDescription.value.length;
  if (valueLength > MAX_DESCRIPTION_LENGTH) {
    textDescription.setCustomValidity(`Удалите лишние ${valueLength - MAX_DESCRIPTION_LENGTH} симв.`);
  } else {
    textDescription.setCustomValidity('');
  }
  textDescription.reportValidity();
});
