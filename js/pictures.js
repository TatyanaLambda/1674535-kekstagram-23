import {createPhotoDescriptions} from './data.js';
import {showBigPicture} from './bigpicture.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photoDescriptions = createPhotoDescriptions();
const photoDescriptionFragment = document.createDocumentFragment();

photoDescriptions.forEach((photoDescription) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photoDescription.url;
  pictureElement.querySelector('.picture__comments').textContent = photoDescription.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photoDescription.likes;
  photoDescriptionFragment.appendChild(pictureElement);
  pictureElement.addEventListener('click', () => {
    showBigPicture(photoDescription);
  });
});

pictures.appendChild(photoDescriptionFragment);
