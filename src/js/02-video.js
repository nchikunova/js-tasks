import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const TIME_KEY = 'videoplayer-current-time';

const player = new Player(iframe);
player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
      // seconds = the current playback position
    })
    .catch(function (error) {
      // an error occurred
    });
}

player
  .setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)))
  .then(function (seconds) {
    seconds = currentSeconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
