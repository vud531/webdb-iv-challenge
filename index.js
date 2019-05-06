const express = require('express')
// const helmet = require('helmet')
const dishes = require('./routes/dish')
const ingredients = require('./routes/ingredient')
const recipes = require('./routes/recipe')

const server = express()
server.use(express.json())

server.use('/api/dishes', dishes)
server.use('/api/ingredients', ingredients)
server.use('/api/recipes', recipes)


server.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})

// global error handler
server.use((err, req, res, next) => {
    // console.log(err)
    res
    .status(err.status || 500)
    .json({
        error: {
            message: err.message
        }
    })
})

const port = process.env.PORT || 5000;
server.listen(port, () =>
    console.log(`\n** API running on http://localhost:${port} **\n`)
)