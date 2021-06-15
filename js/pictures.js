import {createPhotoDescriptions} from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photoDescriptions = createPhotoDescriptions();
const photoDescriptionFragment = document.createDocumentFragment();

photoDescriptions.forEach(({url, likes , comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  photoDescriptionFragment.appendChild(pictureElement);
});

pictures.appendChild(photoDescriptionFragment);
