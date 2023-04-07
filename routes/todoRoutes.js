const express = require("express");
const {
  getTodos,
  setTodo,
  deleteAll,
  toggleTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.route("/").get(getTodos).post(setTodo).delete(deleteAll);
router.route("/:id").put(toggleTodo);

module.exports = router;
