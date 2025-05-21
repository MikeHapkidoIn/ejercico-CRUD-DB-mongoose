const { timeStamp } = require('console')
const mongoose = require ('mongoose')

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean 
}, {timeStamps: true})

const Task = mongoose.model('task', TaskSchema)

module.exports = task
