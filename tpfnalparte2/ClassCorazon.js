class Corazon {
  constructor() {
    this.x = random(width);
    this.y = random(-200, -50);
    this.despY = 2;
    this.lado = 40;
    this.img = null;
  }

  preload() {
    this.img = loadImage("data/corazon.png");
  }

  actualizar() {
    this.mover();
    this.dibujar();
  }

  mover() {
    this.y += this.despY;
    if (this.y > height + this.lado) {
      this.reiniciarUbicacion();
    }
  }

  dibujar() {
    image(this.img, this.x, this.y, this.lado, this.lado);
  }

  reiniciarUbicacion() {
    this.x = random(width);
    this.y = random(-200, -50);
  }

  evaluaColision(kuzcoX, kuzcoY, kuzcoAncho, kuzcoAlto) {
    return (
      kuzcoX < this.x + this.lado &&
      kuzcoX + kuzcoAncho > this.x &&
      kuzcoY < this.y + this.lado &&
      kuzcoY + kuzcoAlto > this.y
    );
  }
}  
