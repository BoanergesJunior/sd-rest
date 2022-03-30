import "./App.css";
import React, { useEffect, useState } from "react";
import api from "./service/api";
import DatePicker from "react-date-picker";

function App() {
  const [tasks, setTasks] = useState([]);
  const [date, onChangeDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [searchId, setSearchId] = useState("");

  const taskFinished = (id, description, limitTime, finished) => {
    api
      .put(`/task/${id}`, { description, limitTime, finished: !finished })
      .then((result) => {
        const mappedTasks = tasks.map((task) => {
          return task.id === id ? { ...result.data } : { ...task };
        });
        setTasks(mappedTasks);
      });
  };

  const addTask = () => {
    const dateISO = date.toISOString();
    api.post(`/task`, { description, limitTime: dateISO }).then((result) => {
      setTasks((oldArray) => [...oldArray, result.data]);
    });
  };

  const removeTask = (id) => {
    api.delete(`/task/${id}`).then((result) => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  const searchTask = () => {
    api.get(`/task/${searchId}`).then((result) => {
      setTasks(result.data);
    });
  };

  useEffect(() => {
    if (searchId === "")
      api.get("/tasks").then((result) => {
        setTasks(result.data);
        console.log(result.data);
      });
  }, [searchId]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div id="id-search">
        <p>Id: </p>
        <input
          placeholder="Ex: 1647996704660"
          type="text"
          name="search"
          onChange={(e) => setSearchId(e.target.value)}
        />
        <input type="button" value="Pesquisar" onClick={searchTask} />
      </div>
      <div id="description">
        <p>Descrição:</p>
        <input
          placeholder="Ex: Organizar tarefas"
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <DatePicker
          style={{ backgroundColor: "white" }}
          onChange={onChangeDate}
          value={date}

        />
        <input id="add" type="button" value="Adicionar" onClick={addTask} />
      </div>
      <div id="board" >
        {tasks.map((task) => (
          <div className="toDoList">
            <div
              id="card"
              style={{
                textDecoration: task.finished ? "line-through" : "none",
              }}
              onClick={() =>
                taskFinished(
                  task.id,
                  task.description,
                  task.limitTime,
                  task.finished
                )
              }
            >
              <label> <h3>id: {task.id}</h3> </label>
              <label id="label-card" >descrição: {task.description}</label>
              <label>data: {new Date(task.limitTime).toLocaleString()}</label>
              <input
                id="remove"
                type="button"
                value="Remover"
                onClick={() => removeTask(task.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;
