//Gusmerotti Matias
//119052/5
// -Enlace de Youtube-


let juego;
let musicaFondo;

function preload() {
  juego = new Juego();
  juego.preload();
  musicaFondo = loadSound("data/musica.mp3", 
    () => console.log("Música cargada"), 
    (err) => console.error("Error al cargar la música:", err)
  );
}

function setup() {
  createCanvas(640, 480);
  juego.setup();

  botonSonido = new BotonSonido(width - 50, 10, 40, 40);

  if (musicaFondo) {
    musicaFondo.setVolume(0.5);
    musicaFondo.loop();
    musicaFondo.pause();
  }
}

function draw() {
  juego.draw();
  botonSonido.dibujar();
}

function mousePressed() {
  botonSonido.verificarClic();
}

function keyPressed() {
  juego.keyPressed();
}
