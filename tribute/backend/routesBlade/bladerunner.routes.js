const express = require('express');
const router = express.Router();
// const checkAuth = require('../middleware/check-auth');

// si va a ser con Tabs puede que los rutas sean más largas:
// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /bladerunner'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling PODst requests to /bladerunner'
  });
});

router.get('/:deckardId', (req, res, next) => {
  res.status(200).json({
    message: 'Deckard details',
    deckardId: req.params.deckardId
  });
});

// Ruta para borrar info del perfil de Deckard
router.delete('/:deckardId', (req, res, next) => {
  res.status(200).json({
    message: 'Decarkd deleted',
    deckardId: req.params.deckardId
  });
});

module.exports = router;