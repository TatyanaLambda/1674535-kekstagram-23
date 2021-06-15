import {getRandomPositiveInteger, getMixedArray, getMixedRandomLenghtArray} from './utils.js';

const OBJECT_COUNT = 25;
const COMMENT_COUNT = 6;
const AVATAR_COUNT = 5;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const COMMENT_AUTHOR_NAMES = ['Пафнутий', 'Сигизмунд', 'Никодим', 'Акакий', 'Феофан'];
const MESSAGE_TEXTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESPRIPTION_TEXTS = [
  'Моя миленькая фоточка',
  'Моё крутое фото',
  'Зацените все',
  'Купил новый фотик, вот как он фоткает',
  'Посмотрите какая неземная красота',
  'Сфоткал просто на память',
];

const createComment = (index) =>
  ({
    id: index,
    avatar: `img/avatar-${getRandomPositiveInteger(1, AVATAR_COUNT)}.svg`,
    message: MESSAGE_TEXTS[getRandomPositiveInteger(0, MESSAGE_TEXTS.length-1)],
    name: COMMENT_AUTHOR_NAMES[getRandomPositiveInteger(0, COMMENT_AUTHOR_NAMES.length-1)],
  });

const createComments = () =>
{
  const indexArray = Array.from({ length: COMMENT_COUNT }, (_v, i) =>  i + 1);
  const mixedArray = getMixedRandomLenghtArray(indexArray);
  return mixedArray.map((element) => createComment(element));
};

const createPhotoDescription = (index) =>
  ({
    id: index,
    url: `photos/${index}.jpg`,
    description: DESPRIPTION_TEXTS[getRandomPositiveInteger(0, DESPRIPTION_TEXTS.length-1)],
    likes: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: createComments(),
  });

const createPhotoDescriptions = () =>
{
  const indexArray = Array.from({ length: OBJECT_COUNT }, (_v, i) =>  i + 1);
  const mixedArray = getMixedArray(indexArray);
  return mixedArray.map((element) => createPhotoDescription(element));
};

export {createPhotoDescriptions};
