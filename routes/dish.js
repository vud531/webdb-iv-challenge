const express = require('express')
const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

const DB = require('../models/dbHelpers')
const model = 'dishes'

const { asyncHandler } = require('./helpers')

const router = express.Router()

router.get('/', asyncHandler( async(req, res) => {
    const results = await DB.getDishes(); // all the records from the table
    res.status(200).json(results);
}));

router.get('/:id', asyncHandler( async(req, res) => {
    const result = await DB.getDish(req.params.id)
    
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({messasge: model + " not found"});
    }
}));

router.post('/', asyncHandler(async (req, res) => {
    // if(req.body.name) {
        const [id] = await DB.addDish(req.body);
        const result = await db(model)
        .where({ id })
        .first();
        res.status(201).json(result);
    // } else {
    //     const err = new Error('Cohort name is required')
    //     err.status = 400
    //     throw err
    // }

}));

router.put('/:id', asyncHandler(async (req, res) => {
    const count = await db(model)
    .where('id', req.params.id)
    .update(req.body);

    console.log(count)

    if (count > 0) {
        const result = await db(model)
        .where({ id: req.params.id })
        .first();

        res.status(200).json(result);
    } else {
        res.status(404).json({messasge: model + " not found"});
    }
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const count = await db(model)
    .where({ id: req.params.id })
    .del();

    if (count > 0) {
        res.status(204).end();
    } else {
        res.status(404).json({ message: model + ' not found' });
    }
}));


module.exports = router
