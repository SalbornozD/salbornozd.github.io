$(function() {
  var currentPokemonId = 1;

  $("#buscar").click(function() {

    busqueda = $("#buscador").val()
    if (busqueda == ""){
      busqueda = 1
    }

    $.getJSON("https://pokeapi.co/api/v2/pokemon/"+busqueda, function(data) {
      pokeNombre = data.name;
      currentPokemonId = data.id;
      pokeImagen = data.sprites.front_default; 
      $("#nombrePokemon").text(pokeNombre);
      $("#pokemon-image").attr("src", pokeImagen);
    });
    
  });

  $("#atras").click(function() {

    currentPokemonId = currentPokemonId - 1;
    if (currentPokemonId <= 0 ){
      currentPokemonId = 893
    }

    $.getJSON("https://pokeapi.co/api/v2/pokemon/"+currentPokemonId, function(data) {
      pokeNombre = data.name;
      currentPokemonId = data.id;
      pokeImagen = data.sprites.front_default; 
      $("#nombrePokemon").text(pokeNombre);
      $("#pokemon-image").attr("src", pokeImagen);
    });
    
  });

  $("#siguiente").click(function() {
    
    currentPokemonId = currentPokemonId + 1;
    if (currentPokemonId >= 893 ){
      currentPokemonId = 1;
    }
    $.getJSON("https://pokeapi.co/api/v2/pokemon/"+currentPokemonId, function(data) {
      pokeNombre = data.name;
      currentPokemonId = data.id;
      pokeImagen = data.sprites.front_default; 
      $("#nombrePokemon").text(pokeNombre);
      $("#pokemon-image").attr("src", pokeImagen);
    });
    
  });

});
