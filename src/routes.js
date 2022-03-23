const express = require("express");
const TaskController = require("./controllers/TaskController");

const routes = express.Router();

routes.post("/tasks", TaskController.createTask);
routes.get("/tasks", TaskController.getTasks);
routes.get("/tasks/:id", TaskController.getTaskById);
routes.put("/tasks/:id", TaskController.changeTask);
routes.delete("/tasks/:id", TaskController.removeTask);

module.exports = routes;
