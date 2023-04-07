const express = require("express");
const {
  getTodos,
  setTodo,
  toggleTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.route("/").get(getTodos).post(setTodo);
router.route("/:id").put(toggleTodo);

module.exports = router;
