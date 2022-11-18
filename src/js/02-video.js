import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(vimeoPlayer);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
