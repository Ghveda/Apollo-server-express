const app = require("express");
const { createPost, getAllPosts } = require("../controllers/postsController");

const route = app.Router();

route.post("/posts", createPost);
route.get("/posts", getAllPosts);

module.exports = route;
