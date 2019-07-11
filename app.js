(function () {
  'use strict';
  window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    console.log(audio);

    if (!audio) return;  // stop function from running altogether
    audio.currentTime = 0;  // rewind to start
    audio.play();

  })


})();
