const express = require("express");
const Ctrl = require("./controller.js");

const app = express();

const SERVER_PORT = 5000;

app.use(express.json());

app.get("/api/task", Ctrl.getTask);
app.post("/api/task", Ctrl.addTask);
app.put("/api/task/:id", Ctrl.editTask);
app.delete("/api/task/:id", Ctrl.deleteTask);

app.listen(SERVER_PORT, () => {
  console.log(`We're done ${SERVER_PORT}`);
});
