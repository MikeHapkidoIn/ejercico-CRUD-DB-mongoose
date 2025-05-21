const Task = require('../models/Task.js')

const TaskController = {
  async create (req, res) {
    try {
    const task = await Task.create({...req.body, completed: false})
    res.status(201).send(task)
    } catch(err) {
      console.log(err)
    }
  },
  async getAll (req, res) {
    try {
      const tasks = await Task.find()
      res.json(tasks)
    } catch(err) {
      console.log(err)
    }
  }
}



module.exports = TaskController