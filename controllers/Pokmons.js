'use strict';

var utils = require('../utils/writer.js');
var Pokmons = require('../service/PokmonsService');

module.exports.adicionaPokemon = function adicionaPokemon (req, res, next) {
  var pokemons_ = req.swagger.params['pokemons_'].value;
  Pokmons.adicionaPokemon(pokemons_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.atualizaPokemon = function atualizaPokemon (req, res, next) {
  var id = req.swagger.params['id'].value;
  var pokemon_ = req.swagger.params['pokemon_'].value;
  Pokmons.atualizaPokemon(id,pokemon_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscaPokemon = function buscaPokemon (req, res, next) {
  var pokemons_ = req.swagger.params['pokemons_'].value;
  Pokmons.buscaPokemon(pokemons_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletaPokemon = function deletaPokemon (req, res, next) {
  var id = req.swagger.params['id'].value;
  var pokemon_ = req.swagger.params['pokemon_'].value;
  Pokmons.deletaPokemon(id,pokemon_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
