const { Router } = require('express');
const { getGamesHandler, createGamehandler, updateGameHandler } = require('../handlers/gamesHandlers');

const gamesRouter = Router();

gamesRouter.get('/', getGamesHandler);
gamesRouter.post('/', createGamehandler);
gamesRouter.put('/:id', updateGameHandler);

module.exports = gamesRouter;