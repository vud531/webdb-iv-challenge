const express = require('express')
// const helmet = require('helmet')
// const cohorts = require('./routes/cohortsRoute')
// const students = require('./routes/studentsRoute')

const server = express()
server.use(express.json())

// server.use('/api/cohorts', cohorts)
// server.use('/api/students', students)


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