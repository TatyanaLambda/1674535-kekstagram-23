import {isEscEvent} from './utils.js';

const COMMENT_LOADER_STEP = 1;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComment = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const pictureCancelBtn = document.querySelector('#picture-cancel');
const commentLoaderBtn = document.querySelector('.social__comments-loader');
const sendCommentBtn = document.querySelector('.social__footer-btn');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoadedCount = document.querySelector('.comments-loaded');

let comments = [];


const showComments = (commentsSlice) => {
  const commentFragment = document.createDocumentFragment();
  commentsSlice.forEach(({avatar , message, name}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentFragment.appendChild(commentElement);
  });
  socialComment.appendChild(commentFragment);
  comments.splice(0, COMMENT_LOADER_STEP);
};

const showBigPicture = (picture) => {
  comments=picture.comments.slice();
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;
  socialComment.innerHTML='';
  if (comments.length <= COMMENT_LOADER_STEP) {
    hideCommentLoaderBtn();
    commentsLoadedCount.textContent = comments.length;
  } else {
    showcommentLoaderBtn();
    commentsLoadedCount.textContent = COMMENT_LOADER_STEP;
  }
  showComments(comments.slice(0,COMMENT_LOADER_STEP));
};

const onCommentsLoadMoreButtonClick = function(){
  if (comments.length <= COMMENT_LOADER_STEP) {
    hideCommentLoaderBtn();
    commentsLoadedCount.textContent =  Number(commentsLoadedCount.textContent) + comments.length;
  }
  else{
    commentsLoadedCount.textContent = Number(commentsLoadedCount.textContent) + COMMENT_LOADER_STEP;
  }
  showComments(comments.slice(0,COMMENT_LOADER_STEP));
};

function showcommentLoaderBtn(){
  commentLoaderBtn.classList.remove('hidden');
  commentLoaderBtn.addEventListener('click', onCommentsLoadMoreButtonClick);
}

function hideCommentLoaderBtn(){
  commentLoaderBtn.classList.add('hidden');
  commentLoaderBtn.removeEventListener('click', onCommentsLoadMoreButtonClick);
}

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

pictureCancelBtn.addEventListener('click', () => {
  comments = [];
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  //тут надо добавить отписку от событий большого изображения
});


sendCommentBtn.addEventListener('click', () => {
  commentsCount.textContent=Number(commentsCount.textContent)+1;
  //тут будет отправка данных на сервер
});

export {showBigPicture};
