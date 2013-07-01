$(document).ready(function() {
  var dinoCount = 1;
  var jeepCount = 1;
  $(document).keyup(function (e) {
    if (e.keyCode == 32) {
      dinoCount = dinoCount + 1
      var dino = $('#dino td.active');
      $(dino).removeClass('active');
      $(dino).next().addClass('active');
        location.replace("/victory_dino.html");

    }
    if (e.keyCode == 39) {
      jeepCount = jeepCount + 1;
      if (jeepCount > 10){
        console.log(jeepCount);
        location.replace("/victory_jeep.html");
      }
      var jeep = $('#jeep td.active');
      $(jeep).removeClass('active');
      $(jeep).next().addClass('active');
    }
  });
});
