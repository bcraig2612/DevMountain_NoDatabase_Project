let toDoListArr = [];

module.exports = {
  getToDos: (req, res) => {
    console.log(toDoListArr, "hello");
    res.status(200).send(toDoListArr);
  },

  updateToDo: (req, res) => {
    let toDoIndex = req.body.index;
    toDoListArr.splice(toDoIndex, 1, req.body.toDos);
    res.status(200).send(toDoListArr).catch(err => {
      res.status(500).send(err);
    });
  },

  deleteToDo: (req, res) => {
    console.log("req.body", req.body);
    let toDoIndex = req.body.index;
    toDoListArr.splice(toDoIndex, 1);
    res.status(200).send(toDoListArr);
  },

  postToDo: (req, res) => {
    toDoListArr.push(req.body.toDo);
    res.status(200).send(toDoListArr);
  }
};
