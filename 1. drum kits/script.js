window.addEventListener("keypress", e => {
  const keyCode = e.charCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) {
    return;
  }
  /** play audio */
  audio.currentTime = 0;
  audio.play();
  /** animation of key */
  const keySelected = document.querySelector(`.key[data-key="${keyCode}"]`);
  //   console.log(keySelected);
  keySelected.classList.add("playing");
});

const keyList = document.querySelectorAll(".key");
console.log(keyList.length);
