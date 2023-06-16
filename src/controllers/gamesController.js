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
        },
        {
            model: Language,
            attributes: ['name']
        },
        {
            model: Editorial,
            attributes: ['name']
        }
        ]
    });
    return games;
};

const createGame = async (name, released, price, age, players, rating, stock, image, weight, playing_time, categoryName, thematicName, mechanicName, editorialName) => {
    console.log('en createGame');

    const { thematic_id } = await Thematic.findOne({ where: { name: thematicName } });
    const { mechanic_id } = await Mechanic.findOne({ where: { name: mechanicName } });
    const { editorial_id } = await Editorial.findOne({ where: { name: editorialName } });
    // console.log('thematic');
    // console.log(thematic);
    console.log('thematic.id');
    console.log(thematic_id);
    console.log('mechanic_id');
    console.log(mechanic_id);
    console.log('editorial_id');
    console.log(editorial_id);

    const newGame = await Game.create({ name, released, price, age, players, rating, stock, image, weight, playing_time, thematicThematicId: thematic_id, mechanicMechanicId: mechanic_id, editorialEditorialId: editorial_id });

    console.log('newGame');
    console.log(newGame);

    const category = await Category.findOne({ where: { name: categoryName } });

    console.log('category');
    console.log(category);

    await newGame.addCategories(category.id);


    return newGame;
};


module.exports = {
    getGames,
    createGame,
};