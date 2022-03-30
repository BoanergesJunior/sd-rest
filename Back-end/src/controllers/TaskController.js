const Task = require("../models/Task");

const tasks = [
  {
    id: 1647996704660,
    description: "Buscar roupa na lavanderia.",
    limitTime: "2021-03-30T02:10:21.729Z",
    finished: false,
  },
  {
    id: 1647996704662,
    description: "Buscar roupa na lavanderiadsadasdas.",
    limitTime: "2021-03-30T02:10:21.729Z",
    finished: true,
  },
];
module.exports = {
  async createTask(req, res) {
    const { description, limitTime, finished } = req.body;

    const task = {
      id: new Date().getTime(),
      description,
      limitTime,
      finished: false,
    };
    tasks.push(task);
    return res.json(task);
  },
  async getTasks(_, res) {
    return res.json(tasks);
  },
  async getTaskById(req, res) {
    const id = req.params.id;
    const tasksFiltered = tasks.filter(
      (task) => task.id.toString().indexOf(id) > -1
    );
    if (tasksFiltered) {
      return res.json(tasksFiltered);
    } else {
      res.status(404).json({
        message: "Task não existe.",
      });
    }
  },
  async changeTask(req, res) {
    const { description, limitTime, finished } = req.body;
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id == id);

    if (taskIndex != -1) {
      const updatedTask = {
        id,
        description,
        limitTime,
        finished,
      };
      tasks.splice(taskIndex, 1, updatedTask);
      return res.json(updatedTask);
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
