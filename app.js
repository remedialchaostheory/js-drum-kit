(function () {
  'use strict';
  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

    if (!audio) return;  // stop function from running altogether
    audio.currentTime = 0;  // rewind to start
    audio.play();
    key.classList.add('playing');


  });

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  // skip if not transform
    console.log(this);
    this.classList.remove('playing');

  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));



})();
