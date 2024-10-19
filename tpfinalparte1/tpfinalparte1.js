// TP#Final Parte 1 - Comisión 3, David Bedoian
// Gusmerotti Matias 119052/5 - Gomez Nahuel 92547/8
// Película elegida: Las Locuras del Emperador
// Video explicativo: https://youtu.be/p8vpDizX3OY

let fondos=[];
let estado=1;
let botonSiguiente=true;
let txt;
let elecSound;
let finalSound;
var pantallasTotales = 27;


function preload() {
 for (let num = 1; num < pantallasTotales; num+=1) {
    fondos[num] = loadImage("data/fondo" + num + ".jpg");
  }
  txt = loadStrings("data/fases.txt");  
  soundFormats('mp3');
  elecSound = loadSound('data/eleccion');
  finalSound = loadSound('data/coin');
}

function setup() {
  createCanvas(640,480);
  background(0);
  textSize(18);
}

function draw() {
  fill(0);
  pantallas();
  stroke(0);
  strokeWeight(2);
  botonPrincipal();
  if(estado===1){
    botonCreditos();  
 }
  if(estado === 3 || estado === 8 || estado === 14){
    botonesEleccion1();
    botonSiguiente=false;
 }
  if(estado === 2 || estado === 4 || estado === 5 || estado === 6 || estado === 7 || estado === 9 || estado === 11 || estado === 12 || estado === 13 || estado === 15 || estado === 17 || estado === 18 || estado === 20 || estado === 21 || estado === 22 || estado === 23 || estado === 24){
   botonSiguiente=true;
 }
  if(estado === 10 || estado === 16 || estado === 19 || estado === 25|| estado === 26){
   botonSiguiente=false;
   botonReiniciar();
 }
}


function pantallas() {
  fill(255, 255, 0);
  strokeWeight(4);
  stroke(0);
  let fondo = fondos[estado];
  if (estado === 1) {
    x = 30; y = 300;
    textIndices = [0, 1, 2];
  } else if (estado === 2) {
    x = 30; y = 30;
    textIndices = [3, 4];
  } else if (estado === 3) {
    x = 30; y = 350;
    textIndices = [5];
  } else if (estado === 4) {
    x = 30; y = 330;
    textIndices = [6, 7, 8];
  } else if (estado === 5) {
    x = 30; y = 320;
    textIndices = [6, 10];
  } else if (estado === 6) {
    x = 30; y = 30;
    textIndices = [11];
  } else if (estado === 7) {
    x = 30; y = 340;
    textIndices = [12];
  } else if (estado === 8) {
    x = 30; y = 360;
    textIndices = [13];
  } else if (estado === 9) {
    x = 30; y = 30;
    textIndices = [14, 15];
  } else if (estado === 10) {
    x = 30; y = 400;
    textIndices = [16];
  } else if (estado === 11) {
    x = 30; y = 300;
    textIndices = [17, 18, 19];
  } else if (estado === 12) {
    x = 30; y= 360;
    textIndices = [20, 21];
  } else if (estado === 13) {
    x= 30; y = 320;
    textIndices = [22, 23, 24];
  } else if (estado === 14) {
    x= 30; y = 380;
    textIndices = [25];
  } else if (estado === 15) {
    x= 30; y = 340;
    textIndices = [26];
  } else if (estado === 16) {
    x= 30; y = 340;
    textIndices = [26, 27, 28, 29, 30, 31];
  } else if (estado === 17) {
    x= 30; y = 340;
    textIndices = [32, 33, 34];
  }else if (estado === 18) {
    x= 30; y = 320;
    textIndices = [35, 36];
  }else if (estado === 19) {
    x= 30; y = 360;
    textIndices = [37, 38, 39, 40];
  }else if (estado === 20) {
    x= 30; y = 340;
    textIndices = [41, 42];
  }else if (estado === 21) {
    x= 30; y = 30;
    textIndices = [43, 44];
  }else if (estado === 22) {
    x= 30; y = 40;
    textIndices = [45, 46];
  }else if (estado === 23) {
    x = 30; y = 340;
    textIndices = [47, 48];
  }else if (estado === 24) {
    x= 30 ; y = 340;
    textIndices = [49, 50];
  }else if (estado === 25) {
    x = 30; y = 440;
    textIndices = [51, 52];
  }else if (estado === 26) {
    x= 30; y = 300;
    textIndices = [53, 54, 55, 56];
  }
  image(fondo, 0, 0);
  for (let i = 0; i < textIndices.length; i++) {
    text(txt[textIndices[i]], x, y + i * 20);
  }
}

function botonesEleccion1(){
  fill(255);
  rect(100,400,100,50);
  rect(425,400,100,50);
  fill(255,0,0);
  text('Opción A',115,433);
  text('Opción B',440,433);
  if(mouseX>100 && mouseX<100+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed===true){
    estado=estado+1  
    elecSound.play();
 }
  if(mouseX>425 && mouseX<425+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed===true){
    if(estado===3){
      estado=estado+14;
      elecSound.play();
 }
  if(mouseX>425 && mouseX<425+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed===true){
    estado=estado+3  
    elecSound.play();
  }
 }
}

function botonPrincipal(){
  if(botonSiguiente === true){
    fill(255);
    rect(265,400,100,50);
    fill(0);
    text('Siguiente',280,433);
 }
}

function botonReiniciar(){
  fill(250,0,0);
  rect(10,50,100,50);
  fill(255);
  text('Inicio',27,83);
  if(mouseX>10 && mouseX<10+100 && mouseY>50 && mouseY<50+50 && mouseIsPressed === true){
    estado=1;
    botonSiguiente=true;
    finalSound.play();
  }
}

function botonCreditos(){
  fill(255);
  rect(265,50,100,50);
  fill(0);
  text('+Info',290,83);
  if(mouseX>265 && mouseX<265+100 && mouseY>50 && mouseY<50+50 && mouseIsPressed === true){
    estado=26;
    }
}

function mousePressed(){
  if(mouseX>265 && mouseX<265+100 && mouseY>400 && mouseY<400+50 && botonSiguiente===true){ 
    estado++;
  }
}
