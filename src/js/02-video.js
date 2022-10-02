import Player from '@vimeo/player';
// console.log(Player);

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
console.log('player', player);

// const LOCALSTORAGE_KEY =

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
