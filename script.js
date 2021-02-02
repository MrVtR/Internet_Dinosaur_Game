const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 180;
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
    //keycode.info
  }
}
function jump() {
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position >= 330) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 200) {
          clearInterval(downInterval);
          isJumping = false;
        }
        position -= 20;
        dino.style.bottom = position + 'px';
      }, 20);
    } else {
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 30);
}
function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;
  console.log(randomTime);
  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
      console.log(cactusPosition, position);
    } else if (cactusPosition > 0 && cactusPosition < 65 && position <= 200) {
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over">Fim de Jogo </h1>';
    } else {
      console.log(cactusPosition, position);
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);
  setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);
