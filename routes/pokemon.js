const express = require('express');
const router = express.Router();

const pokemonHandler = require('./handler/pokemon');

router.get('/:id', pokemonHandler.get);
router.get('/', pokemonHandler.getAll);
router.get('/release/:id', pokemonHandler.release)
router.get('/catch/:id', pokemonHandler.catch_pokemon)

module.exports = router;