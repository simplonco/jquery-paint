$(document).ready(function() {

  $('#red').on("click", function() {
    couleur = "red";
  });

  $('#green').on("click", function() {
    couleur = "green";
  });

  $('#blue').on("click", function() {
    couleur = "blue";
  });

  $('#yellow').on("click", function() {
    couleur = "yellow";
  });

  $('#white').on("click", function() {
    couleur = "white";
  });

  // Si pixel cliqué, il change de couleur
  var pixels = $('.box');

  pixels.on("click", function() {
    $(this).removeClass('red green blue yellow white');
    $(this).addClass(couleur);
  });

  $('#reset').on("click", function(){
    pixels.removeClass('red green blue yellow white');
  });
});
