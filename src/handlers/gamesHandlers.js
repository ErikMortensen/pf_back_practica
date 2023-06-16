const { getGames, createGame } = require('../controllers/gamesController');

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

    console.log('req.body')
    console.log(req.body)

    try {
        const newGame = await createGame(name, released, price, age, players, rating, stock, image, weight, playing_time, categoryName, thematicName, mechanicName, editorialName);

        res.status(200).json(newGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getGamesHandler,
    createGamehandler
};