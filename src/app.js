const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


module.exports = app