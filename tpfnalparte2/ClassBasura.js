class Basura {
  constructor() {
    this.tipo = int(random(0, 2));
    this.reiniciarUbicacion();
    this.despY = 3;
    this.lado = 30;
    this.img = null;
  }

  preload() {
    this.img = loadImage("data/pocion_" + this.tipo + ".png");
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
