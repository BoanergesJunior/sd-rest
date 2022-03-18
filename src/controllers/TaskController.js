const Task = require('../models/Task');

module.exports = {
  async store(req, res) {
    const { description, finished } = req.body
    console.log('aqui')
    const task = await Task.create({
      description,
      finished
    })
    return res.json(task)
  }
}