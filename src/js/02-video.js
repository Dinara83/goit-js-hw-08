import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
    console.log(seconds);
  }, 1000)
);
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
