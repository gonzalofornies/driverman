//faltan: añadir un marcador con los puntos/€ y la vida del repartidor.


$(document).ready(function() {
  var barcelona = new Game(); 
  barcelona.setKeys();
  barcelona.createBoard();
  barcelona.insertDriver();
  barcelona.createScoreBoard();
  barcelona.createParcels();
});
