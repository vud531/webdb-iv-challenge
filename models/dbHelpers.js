const knexConfig = require('../knexfile')
const knex = require('knex')

const db = knex(knexConfig.development)
const model = 'dishes'


const getDishes = () => {

    return db(model)
}



const getDish = id => {
    if(id) {
        return db(model)
        .where({ id: id})
        .first();
    }
}

const addDish = dish => {
    const id = db(model).insert(dish);
    return id
}

const getRecipes = () => {

    return db('recipes')
}

const addRecipe = recipe => {
    const id = db(model).insert(recipe);
    return id
}

module.exports = {
    getDishes,
    getDish,
    addDish,
    getRecipes,
    addRecipe
}



