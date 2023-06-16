const axios = require('axios');
const { Op } = require('sequelize');
const { Category, Game, Language, Editorial, Thematic, Mechanic } = require('../db');

const getGames = async () => {
    const games = await Game.findAll({
        include: [{
            model: Category,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }, {
            model: Language,
            attributes: ['name']
        }, {
            model: Editorial,
            attributes: ['name']
        }
        ]
    });
    return games;
};

const createGame = async (name, released, price, age, players, rating, stock, image, weight, playing_time, categoryName, thematicName, mechanicName, editorialName) => {

    const { thematic_id } = await Thematic.findOne({ where: { name: thematicName } });
    const { mechanic_id } = await Mechanic.findOne({ where: { name: mechanicName } });
    const { editorial_id } = await Editorial.findOne({ where: { name: editorialName } });

    const newGame = await Game.create({ name, released, price, age, players, rating, stock, image, weight, playing_time, thematicThematicId: thematic_id, mechanicMechanicId: mechanic_id, editorialEditorialId: editorial_id });

    const category = await Category.findOne({ where: { name: categoryName } });
    await newGame.addCategories(category.id);

    return newGame;
};

const updateGame = async (id, name, released, price, age, players, rating, stock, image, weight, playing_time, categoryName, thematicName, mechanicName, editorialName) => {

    const { thematic_id } = await Thematic.findOne({ where: { name: thematicName } });
    const { mechanic_id } = await Mechanic.findOne({ where: { name: mechanicName } });
    const { editorial_id } = await Editorial.findOne({ where: { name: editorialName } });

    const game = await Game.findByPk(id);

    await game.update({ name, released, price, age, players, rating, stock, image, weight, playing_time, thematicThematicId: thematic_id, mechanicMechanicId: mechanic_id, editorialEditorialId: editorial_id });

    return game;
}


module.exports = {
    getGames,
    createGame,
    updateGame
};