(function () {
  'use strict';

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return;  // stop function from running altogether for other key presses

    key.classList.add('playing');  // add css transition
    audio.currentTime = 0;  // rewind to start for instant replays
    audio.play();
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  // skip if not transform
    this.classList.remove('playing');
  }

  window.addEventListener('keydown', function(e) {
    playSound(e);
  });

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


})();
