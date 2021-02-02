const dino = document.querySelector('.dino');
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    //keycode.info
    jump();
  }
}
function jump() {
  let position = 0;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 20) clearInterval(downInterval);
        position -= 20;
        dino.style.bottom = position + 'px';
      }, 20);
    } else {
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}
document.addEventListener('keyup', handleKeyUp);
