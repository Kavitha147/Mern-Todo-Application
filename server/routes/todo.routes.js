const router = require("express").Router();

const {
  getAllTodos,
  getTodo,
  createATodo,
  updateATodo,
  deleteATodo,
} = require("../controllers/todo.controller");

router.get("/todos-all", getAllTodos);
router.get("/todo/:id", getTodo);
router.post("/todo/new", createATodo);
router.put("/todo/:id", updateATodo);
router.delete("/todo/:id", deleteATodo);

module.exports = router;
