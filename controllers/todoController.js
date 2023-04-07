const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

// @desc    get todos
// @route   GET /todos
// @access  public
const getTodos = asyncHandler(async (req, res) => {
  const { limit } = req.query;
  const todos = await Todo.find().sort({ name: 1 }).limit(limit);
  res.status(200).json(todos);
});

// @desc    set a todo
// @route   POST /todos
// @access  public
const setTodo = asyncHandler(async (req, res) => {
  console.log("looking at request");
  //   console.log(req);
  console.log("looking at request as json");
  console.log(req.body);
  console.log(req.params);
  if (!req.body.name || req.body.name === "") {
    res.status(400);
    throw new Error("Todos must have a name");
  }

  const todo = await Todo.create({
    name: req.body.name,
  });
  res.status(200).json(todo);
});

// @desc    set a todo
// @route   PUT /todos
// @access  public
const toggleTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  // Check if todo exists
  if (!todo) {
    res.status(400);
    throw new Error("todo not found");
  }

  // update todo
  await Todo.findByIdAndUpdate(req.params.id, {
    complete: !todo.complete,
  });

  const confirmation = await Todo.findById(req.params.id);
  res.status(200).json(confirmation);
});

module.exports = {
  getTodos,
  setTodo,
  toggleTodo,
};