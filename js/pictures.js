import {createPhotoDescriptions} from './data.js';
import {showBigPicture} from './bigpicture.js';

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

const bigPictureShower = function (evt) {
  if (evt.target.classList.contains('picture')) {
    evt.preventDefault();
    const targetImage = evt.target.querySelector('.picture__img');
    showBigPicture(targetImage);
  }
  showBigPicture(photoDescriptions[0]);
};

pictures.addEventListener('click', bigPictureShower);
