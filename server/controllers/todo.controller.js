const Todo = require("../model/todo.model");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    try {
      res.status(200).json({
        message: "Got All Todo Successfully",
        todos: todos,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// make a controller for get a todo

exports.getTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });

    if (!todo) {
      return res.status(404).json({ message: `No task with id: ${todoId}` });
    } else {
      res.status(200).json({
        message: "Get a todo successfully.",
        todo: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// make a controller for create a todo

exports.createATodo = async (req, res) => {
  const newTodo = new Todo(req.body);

  await newTodo
    .save()
    .then((res) => {
      res.status(200).json({
        message: "Create a new todo successfully.",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.updateATodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndUpdate(todoId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(404).json({ message: `No todo with id: ${todoId}` });
    } else {
      res.status(200).json({
        message: `Todo with id: ${todoId} updated successfully.`,
        todo: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// make a controller for delete a todo
exports.deleteATodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndDelete(todoId);

    if (!todo) {
      return res.status(404).json({ message: `No todo with id: ${todoId}` });
    } else {
      res.status(200).json({
        message: `Todo with id: ${todoId} deleted successfully.`,
        todo: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
