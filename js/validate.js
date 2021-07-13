const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;
const textHashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');


textDescription.addEventListener('input', () => {
  const valueLength = textDescription.value.length;
  if (valueLength > MAX_DESCRIPTION_LENGTH) {
    textDescription.setCustomValidity(`Удалите лишние ${valueLength - MAX_DESCRIPTION_LENGTH} симв.`);
  } else {
    textDescription.setCustomValidity('');
  }
  textDescription.reportValidity();
});


const checkUnicalElements = function(arr) {
  let i = 0;
  const iMax = arr.length;
  const testobj = {};
  let result = false;
  for ( ; i< iMax; i++ ) {
    result = result || testobj.hasOwnProperty(arr[i].toLowerCase());
    testobj[arr[i]] = arr[i];
  }
  return !result;
};


const pushErrorMessage = function (errorMessage, errorMessages) {
  if (errorMessages.indexOf(errorMessage) === -1) {
    errorMessages.push(errorMessage);
  }
  return errorMessages;
};

const validateHashtags = function (hashtags) {
  const hashtagRegular = /^#[A-Za-zА-Яа-я0-9]{1-19}$/;
  const errorMessages = [];
  const hashtagCount = hashtags.length;
  if (hashtagCount>MAX_HASHTAGS_COUNT){
    pushErrorMessage('Нельзя указывать больше пяти хэш-тегов', errorMessages);
  }
  hashtags.forEach((element) => {
    if(!hashtagRegular.test(element)){
      textDescription.setCustomValidity(`Неверный формат хэштега; ${element}`);
    } else{
      textDescription.setCustomValidity('');
    }
    if (!checkUnicalElements(hashtags)){
      textDescription.setCustomValidity('Все хэштеги должны быть уникальными');
    }
  });

};

textHashtag.addEventListener('input', () =>{
  const textHashtagLowerCase = textHashtag.value.toLowerCase();
  const hashtagsWithSpace = textHashtagLowerCase.textContent.split(' ');
  const hashtags = hashtagsWithSpace.replace(/ +/g, ' ').trim();
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

