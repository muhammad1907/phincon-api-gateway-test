const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

const pokemonHandler = require('./handler/pokemon');

// id pokemon from api
router.get('/:id', pokemonHandler.get);

// id from table user
router.get('/user-getAll/:id', pokemonHandler.getUserAll);
router.get('/', pokemonHandler.getAll);

//id from table pokemons
router.delete('/release/:id', verifyToken, pokemonHandler.release)

// id pokemon from api
router.post('/catch/:id', verifyToken, pokemonHandler.catch_pokemon)

// id from table pokemons
router.put('/rename/:id', verifyToken, pokemonHandler.rename)

module.exports = router;