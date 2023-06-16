const { getGames } = require('../controllers/gamesController');

const getGamesHandler = async (req, res) => {
    try {
        console.log('estoy en el getGamesHandler!')
        const games = await getGames();
        res.status(200).json(games);
    } catch (error) {
        console.log('capturo error del getGamesHandler!')
        res.status(400).json({ error: error.message });
    }

};


const createGamehandler = async (req, res) => {
    // createGame()
};

module.exports = {
    getGamesHandler,
    createGamehandler
};