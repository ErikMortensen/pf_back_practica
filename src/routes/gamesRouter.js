const { Router } = require('express');
const { getGamesHandler, createGamehandler } = require('../handlers/gamesHandlers');

const gamesRouter = Router();

gamesRouter.get('/', getGamesHandler);
gamesRouter.post('/', createGamehandler);

module.exports = gamesRouter;