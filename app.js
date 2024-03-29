(function () {
  'use strict';

  // TODO - have the box of key lower and return to original position when pressed
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

  window.addEventListener('keydown', playSound);

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


})();
