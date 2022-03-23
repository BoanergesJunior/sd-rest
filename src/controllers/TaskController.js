const Task = require("../models/Task");

const tasks = [
  {
    id: 1647996704660,
    description: "Buscar roupa na lavanderia.",
    limitTime: "2021-03-30T02:10:21.729Z",
    finished: "false",
  },
];
module.exports = {
  async createTask(req, res) {
    const { description, limitTime, finished } = req.body;
    const task = {
      id: new Date().getTime(),
      description,
      limitTime,
      finished,
    };
    tasks.push(task);
    return res.json(task);
  },
  async getTasks(_, res) {
    return res.json(tasks);
  },
  async getTaskById(req, res) {
    const id = req.params.id;
    const task = tasks.find((task) => task.id == id);
    if (task) {
      return res.json(task);
    } else {
      res.status(404).json({
        message: "Task não existe.",
      });
    }
  },
  async changeTask(req, res) {
    const { description, limitTime, finished } = req.body;
    const id = req.params.id;
    const taskIndex = tasks.findIndex((task) => task.id == id);

    if (taskIndex != -1) {
      const updatedTask = {
        id,
        description,
        limitTime,
        finished,
      };
      tasks.splice(taskIndex, 1, updatedTask);
      return res.json(tasks);
    } else {
      res.status(404).json({
        message: "Task não existe.",
      });
    }
  },
  async removeTask(req, res) {
    const id = req.params.id;
    const taskIndex = tasks.findIndex((task) => task.id == id);

    if (taskIndex != -1) {
      tasks.splice(taskIndex, 1);
      return res.json({
        message: "Task deletada.",
      });
    } else {
      res.status(404).json({
        message: "Task não existe.",
      });
    }
  },
};
