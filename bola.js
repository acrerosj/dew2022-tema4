const BOLAS = document.querySelectorAll('.bola');
let desplazamiento = 5;
const bola1 = document.getElementById('bola1');
bola1.style.left = "200px";

BOLAS.forEach(BOLA => {
  BOLA.querySelector(".arriba").addEventListener('mouseover', () => moveBall(BOLA,0,-desplazamiento));
  BOLA.querySelector(".abajo").addEventListener('mouseover', () => moveBall(BOLA,0,desplazamiento));
  BOLA.querySelector(".izquierda").addEventListener('mouseover', () => moveBall(BOLA,-desplazamiento,0));
  BOLA.querySelector(".derecha").addEventListener('mouseover', () => moveBall(BOLA,desplazamiento,0));  
});

//document.querySelector('body').addEventListener('keypress', key);
document.body.addEventListener('keypress', key);

function moveBall(BOLA,x, y) {
  console.log(this);
  let top = parseInt(BOLA.style.top) || 50;
  let left = parseInt(BOLA.style.left) || 50;
  top += y;
  left += x;
  BOLA.style.top = top + "px";
  BOLA.style.left = left + "px";
  //desplazamiento++;
}

function key(event) {
  console.log(event.key);
  switch(event.key) {
    case 'w': moveBall(BOLAS[0],0,-desplazamiento);
              break;
    case 's': moveBall(BOLAS[0],0,desplazamiento);
              break;
    case 'a': moveBall(BOLAS[0],-desplazamiento,0);
              break;
    case 'd': moveBall(BOLAS[0],desplazamiento,0);
              break;
    case 'i': moveBall(BOLAS[1],0,-desplazamiento);
              break;
    case 'k': moveBall(BOLAS[1],0,desplazamiento);
              break;
    case 'j': moveBall(BOLAS[1],-desplazamiento,0);
              break;
    case 'l': moveBall(BOLAS[1],desplazamiento,0);
              break;

  }
}