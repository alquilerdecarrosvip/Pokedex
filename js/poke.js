function Pokemon(name, life, attack, shout) {
	this.name = name,
	this.life = life,
	this.attack = attack,
	this.shout = shout,
	this.shoutOut = function() {
		alert(this.shout);
	}
}

var pikachu = new Pokemon("Pikachu", 100, 55, "Pika Pika!!");
var charmander = new Pokemon("Charmander", 80, 60, "Char Char!!");
var bulbasaur = new Pokemon("Bulbasaur", 90, 45, "Bulba Bulba!!");
var squirtle = new Pokemon("Squirtle", 95, 60, "Square Square!!");

var lista_pokedex = [pikachu, charmander, bulbasaur, squirtle];

function load(){
	var pokemon;
	var option = pokemonElection.value;

	// Se crea un ciclo recorriendo cada posición del vector y compare según la opción elejida.
	for(var i=0; i<lista_pokedex.length; i++) {
		// toLowerCase() : Convierte un string a minúsculas.
		if(lista_pokedex[i].name.toLowerCase() == option.toLowerCase()) {
			pokemon = lista_pokedex[i];
			pokemonImage.src = "image/" + pokemon.name.toLowerCase() + ".jpg";
			write_info(pokemon);
			// console.warn(_) : Muestra un mensaje de Warning en la Consola del Navegador Web.
			console.warn(lista_pokedex[i].name.toLowerCase());
			break;
		} else {
			pokemonImage.src = "image/pokedex.jpg";
			pokemonName.innerText = "";
			pokemonData.innerText = "";
		}
	}
}

function write_info(poke) {
	// innerText vs innerHTML : El primero sólo inserta texto plano, el segundo texto con etiquetas HTML
	pokemonName.innerText = poke.name;
	pokemonData.innerText = "Vida : " + poke.life + "\n Ataque : " + poke.attack;
	poke.shoutOut();
}