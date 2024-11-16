class BotonSonido {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.sonidoActivo = false;
  }

  dibujar() {
    fill(this.sonidoActivo ? "green" : "red"); 
    rect(this.x, this.y, this.ancho, this.alto, 10); 
    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(this.sonidoActivo ? "🔊" : "🔇", this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  verificarClic() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y + this.alto
    ) {
      this.sonidoActivo = !this.sonidoActivo;
      if (musicaFondo) {
        if (this.sonidoActivo) {
          musicaFondo.play();
        } else {
          musicaFondo.pause();
        }
      }
    }
  }
}
