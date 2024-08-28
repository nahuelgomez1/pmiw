//Link: https://youtu.be/I9yKXG-vwHA
//Gomez Nahuel Agustin
//Comisión 3
//Legajo: 92547/8

let img;
let isMouseOverCanvas = false;
let changeColor = false;

function preload() {
  img = loadImage('data/image.png' );
}


function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(240);  // Limpiar fondo para cada frame

  // Dibujar la imagen en la primera mitad del lienzo
  if (img) {
    image(img, 0, 0, 400, 400);
  }

  translate(400, 0);

  // Dibujar cuadrícula de rectángulos y elipses con función de cambio de color
  drawGrid(changeColor);

  // Verificar si el mouse está sobre el área del lienzo
  isMouseOverCanvas = checkMouseOverCanvas();
}

// Función para dibujar la cuadrícula de rectángulos y elipses
function drawGrid(changeColor) {
  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      // Configuración de color para rectángulos
      if ((a + b) % 2 == 0) {
        fill(changeColor ? random(255) : 0, changeColor ? random(255) : 0, changeColor ? random(255) : 0);
      } else {
        fill(changeColor ? random(255) : 255, changeColor ? random(255) : 255, changeColor ? random(255) : 255);
      }
      rectMode(CENTER);
      rect(b * 40 + 20, a * 40 + 20, 40, 40);
    }
  }

  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      let d = dist(mouseX - 400, mouseY, b * 40 + 20, a * 40 + 20);
      let ellipseSize = map(d, 0, 400, 10, 40);

      // Configuración de color para elipses
      if ((a + b) % 2 == 0) {
        fill(changeColor ? random(255) : 255, changeColor ? random(255) : 255, changeColor ? random(255) : 255);
      } else {
        fill(changeColor ? random(255) : 0, changeColor ? random(255) : 0, changeColor ? random(255) : 0);
      }
      ellipseMode(CENTER);
      ellipse(b * 40 + 20, a * 40 + 20, ellipseSize, ellipseSize);
    }
  }
}

// Función booleana para verificar si el mouse está sobre el lienzo
function checkMouseOverCanvas() {
  return mouseX >= 400 && mouseX <= 800 && mouseY >= 0 && mouseY <= 400;
}

// Función para cambiar el estado de cambio de color
function toggleColorChange() {
  changeColor = !changeColor;
}

function mousePressed() {
  // Cambiar el estado de cambio de color cuando se presiona el mouse dentro del lienzo
  if (isMouseOverCanvas) {
    toggleColorChange();
  }
}
