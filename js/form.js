import {isEscEvent} from './utils.js';

const userModalOpenElement = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const uploadSubmitBtn = document.querySelector('#upload-submit');



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
  body.classList.remove('modal-open');
  userModalElement.classList.add('hidden');
  uploadCancelBtn.removeEventListener('click', () => {
    userModalElement.classList.add('hidden');
  });

  document.removeEventListener('keydown', onPopupEscKeydown);
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

/*


хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;

один и тот же хэш-тег не может быть использован дважды;


если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
 */
