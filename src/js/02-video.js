import Player from '@vimeo/player';
// console.log(Player);

const iframe = document.querySelector('#vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const getCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
console.log(getCurrentTime);

const iframePlayer = new Player(iframe);

iframePlayer.on('play', onPlay);

function onPlay(evt) {
  console.log(evt);
  console.log('played the video!');

  const seconds = evt.seconds;
  // console.log('seconds', seconds);
}

// Player.setCurrentTime;

iframePlayer
  .getCurrentTime()
  .then(function (seconds) {
    console.log(seconds);
    const JSON_seconds = JSON.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON_seconds);
  })
  .catch(function (error) {
    console.log(error);
  });

// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });

// player.on('play', function () {
//   console.log('played the video!');
// });

// const player = new Player(iframe);
// console.log('player', player);

// const LOCALSTORAGE_KEY =

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });

// player.on('play', function () {
//   console.log('played the video!');
// });
