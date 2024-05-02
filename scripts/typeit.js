if (document.getElementById("index-h1")) {
    new TypeIt("#index-h1", {
      speed: 75,
    })
    .pause(500)
    .move(-12)
    .delete(5)
    .pause(200)
    .type("Grow")
    .pause(200)
    .move(-15)
    .delete(4)
    .type("Learn")
    .move(27)
    .pause(500)
    .type("!")
    .go();
  } else if (document.getElementById("uncc-h1")) {
    new TypeIt("#uncc-h1", {
      speed: 100,
    })
      .move(-8)
      .delete(1)
      .type("C")
      .move(-2)
      .delete(3)
      .type('UNC')
      .move(10)
      .go();
  }