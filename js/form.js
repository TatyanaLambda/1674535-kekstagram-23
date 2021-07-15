import {isEscEvent} from './utils.js';

const userModalOpenElement = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const uploadSubmitBtn = document.querySelector('#upload-submit');
const textHashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const uploadForm = document.querySelector('.img-upload__form');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal (){
  body.classList.add('modal-open');
  userModalElement.classList.remove('hidden');
  uploadCancelBtn.addEventListener('click', () => {
    userModalElement.classList.add('hidden');
  });

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal (){
  if (textHashtag !== document.activeElement && textDescription !== document.activeElement){
    body.classList.remove('modal-open');
    userModalElement.classList.add('hidden');
    uploadCancelBtn.removeEventListener('click', () => {
      userModalElement.classList.add('hidden');
    });
    document.removeEventListener('keydown', onPopupEscKeydown);
    uploadForm.reset();
  }
}

userModalOpenElement.addEventListener('change', () => {
  openUserModal();
});

uploadCancelBtn.addEventListener('click', () => {
  closeUserModal();
});


uploadSubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUserModal();
});

document.addEventListener('keydown', (evt) => {
  if (textHashtag === document.activeElement || textDescription === document.activeElement) {
    evt.stopPropagation();
  }
});
