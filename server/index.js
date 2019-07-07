const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ctlr = require("./Controllers");

app.use(bodyParser.json());

app.get("/api/toDos", ctlr.getToDos);
app.put("/api/update", ctlr.updateToDo);
app.delete("/api/delete", ctlr.deleteToDo);
app.post("/api/create", ctlr.postToDo);

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
