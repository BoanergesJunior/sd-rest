import api from "./api";

export default class taskService {
  getAll = () => {
    api.get("/tasks").then((result) => {
      console.log(result);
    });
  };
}
