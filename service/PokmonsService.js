'use strict';


/**
 * Adicionar Pokémon
 * Adiciona um novo Pokémon na Pokedex
 *
 * pokemons_ Pokemons__1  (optional)
 * returns pokemons__1
 **/
exports.adicionaPokemon = function(pokemons_) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Pokémon
 * Atualiza as informações de um Pokémon
 *
 * id Integer 
 * pokemon_ Pokemon_  (optional)
 * no response value expected for this operation
 **/
exports.atualizaPokemon = function(id,pokemon_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Buscar Pokémon
 * Busca um Pokémon na Pokedex
 *
 * pokemons_ Pokemons_  (optional)
 * no response value expected for this operation
 **/
exports.buscaPokemon = function(pokemons_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletar Pokémon
 * Deletar as informações de um Pokémon
 *
 * id Integer 
 * pokemon_ Pokemon__1  (optional)
 * no response value expected for this operation
 **/
exports.deletaPokemon = function(id,pokemon_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

