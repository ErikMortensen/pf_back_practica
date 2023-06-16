const axios = require('axios');
const { Op } = require('sequelize');
const { Category, Game, Language, Editorial } = require('../db');

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
    })

    return games;
}

module.exports = {
    getGames,
}