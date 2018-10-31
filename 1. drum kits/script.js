// window.addEventListener("keypress", e => {
//   const keyCode = e.charCode;
//   //   console.log(keyCode);s
//   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//   if (!audio) {
//     return;
//   }
//   /** play audio */
//   audio.currentTime = 0;
//   audio.play();
//   /** animation of key */
//   const keySelected = document.querySelector(`.key[data-key="${keyCode}"]`);
//   //   console.log(keySelected);
//   keySelected.classList.add("playing");
// });

function addTransistion(e) {
  let keyCode = e.charCode;

  keyCode = keyCode > 90 ? keyCode - 32 : keyCode;

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
}

function removeTransition(e) {
  if (e.propertyName != "transform") {
    return;
  }
  e.target.classList.remove("playing");
}

var keyList = document.querySelectorAll(".key");
keyList.forEach(key => {
  //   console.log(key);
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keypress", addTransistion);
