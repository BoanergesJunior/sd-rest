const express = require("express");
const TaskController = require("./controllers/TaskController");

const routes = express.Router();

routes.post("/task", TaskController.createTask);
routes.get("/tasks", TaskController.getTasks);
routes.get("/task/:id", TaskController.getTaskById);
routes.put("/task/:id", TaskController.changeTask);
routes.delete("/task/:id", TaskController.removeTask);

module.exports = routes;
