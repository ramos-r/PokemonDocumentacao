
 function getPokemon (pokemons){

	const nomes = {
		method: 'GET'
	  }
  
	  return fetch('http://localhost:3000/pokemons', nomes)
		.then(T => T.json())
	}

	// for (let i = 1; i <= id; i++){
	// 	const pokeInnerHTML = `
	// 	<div class = Npokemon>
	// 		<h3 class="name">${name}</h3>
	// 	</div>
	// 	`;
	// }
//}
 
 
 // GET retrieve all to-do’s
 fetch('http://localhost:3000/pokemons')
 .then(response => response.json())
 .then(json => console.log(json))

//  function getPokemon (pokemons){
// 	 const pokeInnerHTML = 
// 	 }
//     ;

getPokemon();
 
 // will return all resources

 // POST adds a random id to the object sent
 fetch('http://localhost:3000/pokemons', {
 method: 'POST',
 body: JSON.stringify({
 userId: 1,
 completed: false
 }),

 headers: {
 "Content-type": "application/json; charset=UTF-8"
 }
 })
 .then(response => response.json())
 .then(json => console.log(json))

 // PUT to the resource with id = 5 to change the name of task
 fetch('http://localhost:3000/pokemons/5', {
 method: 'PUT',
 body: JSON.stringify({
 userId: 1,
 id: 5,
 completed: false
 }),
 })
 .then(response => response.json())
 .then(json => console.log(json))



 // DELETE task with id = 1
 fetch('http://localhost:3000/pokemons/1', {
 method: 'DELETE'
 })
 // empty response: {}





// const poke_container = document.getElementById('poke_container');
// const pokemons_number = 150;
// // const colors = {
// // 	fire: '#FDDFDF',
// // 	grass: '#DEFDE0',
// // 	electric: '#FCF7DE',
// // 	water: '#DEF3FD',
// // 	ground: '#f4e7da',
// // 	rock: '#d5d5d4',
// // 	fairy: '#fceaff',
// // 	poison: '#98d7a5',
// // 	bug: '#f8d5a3',
// // 	dragon: '#97b3e6',
// // 	psychic: '#eaeda1',
// // 	flying: '#F5F5F5',
// // 	fighting: '#E6E0D4',
// // 	normal: '#F5F5F5'
// // };
// // const main_types = Object.keys(colors);

// const fetchPokemons = async () => {
// 	for (let i = 1; i <= pokemons_number; i++) {
// 		await getPokemon(i);
// 	}
// };

// const getPokemon = async id => {
// 	const url = `http://localhost:3000/pokemons/${id}`;
// 	const res = await fetch(url);
// 	const pokemon = await res.json();
// 	console.log(pokemon);
// 	// createPokemonCard(pokemon);

// };

// // function createPokemonCard(pokemon) {
// //  	const pokemonEl = document.createElement('div');
// //  	pokemonEl.classList.add('pokemon');

// //  	const poke_types = pokemon.types.map(type => type.type.name);
// // // 	//const type = main_types.find(type => poke_types.indexOf(type) > -1);
// //     const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
// // // 	//const color = colors[type];
	
// // // 	pokemonEl.style.backgroundColor = color;

// // 	// const pokeInnerHTML = `
// //     //     <div class="img-container">
// //     //         <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" />
// //     //     </div>
// //     //     <div class="info">
// //     //         <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
// //     //         <h3 class="name">${name}</h3>
// //     //         <small class="type">Type: <span>${type}</span></small>
// //     //     </div>
// // 	// `;
	
// // 	const pokeInnerHTML = `
// //          <div class="info">
// //              <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
// //              <h3 class="name">${name}</h3>
// //          </div>
// //      `;

// // 	//  pokemonEl.innerHTML = pokeInnerHTML;

// // 	//  poke_container.appendChild(pokemonEl);
// // }

// fetchPokemons();
