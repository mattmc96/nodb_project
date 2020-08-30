const data = require("./data.json");

let taskId = data[data.length - 1].id + 1;

let tasks = [];

module.exports = {
  //   addTask: (req, res) => {
  //     const { title, desc } = req.body;
  //     data.push({ id, title, desc });
  //     id++;
  //     res.status(200).send(data);
  //   },

  getTask: (req, res) => {
    res.status(200).send(data);
  },
  addTask: (req, res) => {
    console.log(req.body);
    const { title, desc } = req.body;

    const newTask = {
      id: taskId,
      title,
      desc,
    };

    data.push(newTask);

    taskId++;

    res.status(200).send(data);
  },

  editTask: (req, res) => {
    const { id } = req.params;
    const { title, desc } = req.body;

    const index = data.findIndex((element) => element.id === +id);
    if (index === -1) {
      return res.status(404).send("task not found");
    }

    const existingTasks = data[index];
    const modifiedTasks = {
      id: existingTasks.id,
      title: title || existingTasks.title,
      desc: desc || existingTasks.desc,
    };

    data[index] = modifiedTasks;

    res.status(200).send(data);
  },

  deleteTask: (req, res) => {
    const deleteID = req.params.id;
    index = data.findIndex((element) => element.id === deleteID);
    data.splice(index, 1);
    res.status(200).send(data);
  },
};
