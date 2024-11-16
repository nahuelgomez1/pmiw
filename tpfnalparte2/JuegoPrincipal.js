class Juego {
  constructor() {
    this.estado = "inicio";
    this.puntos = 0;
    this.vidas = 3;
    this.basura = [];
    this.corazones = [];
    this.cantBasura = 5;
    this.cantCorazones = 1;
    this.imgCursor = null;
    this.fondoInicio = null;
    this.fondoReglas = null;
    this.fondoCreditos = null;
    this.fondoDerrota = null;
    this.fondoVictoria = null;
    this.fondoJuego = null;

    for (let i = 0; i < this.cantBasura; i++) {
      this.basura.push(new Basura());
    }

    for (let i = 0; i < this.cantCorazones; i++) {
      this.corazones.push(new Corazon());
    }
  }

  preload() {
    this.imgCursor = loadImage("data/kuzco.png");
    this.fondoJuego = loadImage("data/fondo.png");
    this.fondoInicio = loadImage("data/fondo.png");
    this.fondoReglas = loadImage("data/fondo.png");
    this.fondoCreditos = loadImage("data/fondo.png");
    this.fondoDerrota = loadImage("data/fondoperder.png");
    this.fondoVictoria = loadImage("data/fondoganar.png");
    for (let obj of this.basura) obj.preload();
    for (let obj of this.corazones) obj.preload();
  }

  setup() {
    noCursor();
  }

  draw() {
    if (this.estado === "inicio") {
      this.pantallaInicio();
    } else if (this.estado === "reglas") {
      this.pantallaReglas();
    } else if (this.estado === "creditos") {
      this.pantallaCreditos();
    } else if (this.estado === "jugando") {
      this.juegoPrincipal();
    } else if (this.estado === "victoria") {
      this.pantallaVictoria();
    } else if (this.estado === "derrota") {
      this.pantallaDerrota();
    }
  }

  pantallaInicio() {
    image(this.fondoInicio, 0, 0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("¡Bienvenido!", width / 2, 100);
    textSize(20);
    text("Presiona 1 para Iniciar", width / 2, 200);
    text("Presiona 2 para ver las Reglas", width / 2, 240);
    text("Presiona 3 para ver los Créditos", width / 2, 280);
  }

  pantallaReglas() {
    image(this.fondoReglas, 0, 0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Reglas del Juego", width / 2, 80);
    textSize(18);
    text("1. Recoge las pociones correctas (+1 punto).", width / 2, 150);
    text("2. Evita las pociones incorrectas (-1 vida).", width / 2, 180);
    text("3. Gana al llegar a 20 puntos.", width / 2, 210);
    text("4. Pierdes si te quedas sin vidas.", width / 2, 240);
    text("Presiona B para regresar al inicio.", width / 2, 300);
  }

  pantallaCreditos() {
    image(this.fondoCreditos, 0, 0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Créditos", width / 2, 80);
    textSize(18);
    text("Desarrollado por: Gusmerotti Matias y Gomez Nahuel", width / 2, 150);
    text("Arte: Derechos de autor reservados a Walt Disney Pictures", width / 2, 180);
    text("Presiona B para regresar al inicio.", width / 2, 300);
  }

  juegoPrincipal() {
    image(this.fondoJuego, 0, 0);

    fill(255);
    textSize(40);
    text("Puntos: " + this.puntos, 90, 50);
    text("Vidas: " + this.vidas, 80, 90);

    const kuzcoAncho = 100;
    const kuzcoAlto = 100;

    for (let obj of this.basura) {
      obj.actualizar();
      if (obj.evaluaColision(mouseX, height - kuzcoAlto, kuzcoAncho, kuzcoAlto)) {
        if (obj.tipo === 0) {
          this.puntos++;
        } else {
          this.vidas--;
        }
        obj.reiniciarUbicacion();
      }
    }

    for (let obj of this.corazones) {
      obj.actualizar();
      if (obj.evaluaColision(mouseX, height - kuzcoAlto, kuzcoAncho, kuzcoAlto)) {
        this.vidas++;
        obj.reiniciarUbicacion();
      }
    }

    if (this.vidas <= 0) {
      this.estado = "derrota";
      return;
    }

    if (this.puntos >= 20) {
      this.estado = "victoria";
      return;
    }

    image(this.imgCursor, mouseX, height - kuzcoAlto, kuzcoAncho, kuzcoAlto);
  }

  pantallaVictoria() {
    image(this.fondoVictoria, 0, 0);
    fill(0, 255, 0);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("¡VICTORIA!", width / 2, height / 2 + 150);
    textSize(20);
    fill(0);
    text("Oprime una tecla para reiniciar", width / 2, height / 2 + 200);
  }

  pantallaDerrota() {
    image(this.fondoDerrota, 0, 0);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("¡DERROTA!", width / 2, height / 2 + 150);
    fill(255);
    textSize(20);
    text("Oprime una tecla para reiniciar", width / 2, height / 2 + 200);
  }

  keyPressed() {
    if (this.estado === "inicio") {
      if (key === '1') this.estado = "jugando";
      if (key === '2') this.estado = "reglas";
      if (key === '3') this.estado = "creditos";
    } else if (this.estado === "reglas" || this.estado === "creditos") {
      if (key === 'b' || key === 'B') this.estado = "inicio";
    } else if (this.estado === "victoria" || this.estado === "derrota") {
      this.reiniciarJuego();
      this.estado = "inicio";
    }
  }

  reiniciarJuego() {
    this.puntos = 0;
    this.vidas = 3;
    for (let obj of this.basura) obj.reiniciarUbicacion();
    for (let obj of this.corazones) obj.reiniciarUbicacion();
  }
}
