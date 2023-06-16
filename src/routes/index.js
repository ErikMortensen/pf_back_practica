const { Router } = require('express');
const gamesRouter = require('./gamesRouter');

const router = Router();

// Configurar los routers
router.use('/games', gamesRouter);

module.exports = router;