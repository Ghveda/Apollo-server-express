const app = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const route = app.Router();

route.post("/users", createUser);
route.get("/users", getAllUsers);
route.get("/users/:uuid", getUser);
route.delete("/users/:uuid", deleteUser);
route.put("/users/:uuid", updateUser);

module.exports = route;
