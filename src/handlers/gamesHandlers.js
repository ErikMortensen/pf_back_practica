const { getGames, createGame, updateGame } = require('../controllers/gamesController');

const getGamesHandler = async (req, res) => {
    try {
        console.log('estoy en el getGamesHandler!')
        const games = await getGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};


const createGamehandler = async (req, res) => {
    const { name, released, price, age, players, rating, stock, image, weight, playing_time, categoryName, thematicName, mechanicName, editorialName } = req.body;

    try {
        const newGame = await createGame(name, released, price, age, players, rating, stock, image, weight, playing_time, categoryName, thematicName, mechanicName, editorialName);

        res.status(200).json(newGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateGameHandler = async (req, res) => {
    const { id } = req.params;
    const { name, released, price, age, players, rating, stock, image, weight, playing_time, categoryName, thematicName, mechanicName, editorialName } = req.body;

    try {
        const game = await updateGame(id, name, released, price, age, players, rating, stock, image, weight, playing_time, categoryName, thematicName, mechanicName, editorialName);

        res.status(200).json(game);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getGamesHandler,
    createGamehandler,
    updateGameHandler
};