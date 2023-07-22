const express = require("express");
const { users } = require("../../data/users");

const routerUsers = express.Router();

routerUsers.use(express.json());

// all users
routerUsers.get("/", (req, resp) => {
	resp.send(users);
});

routerUsers.get("/:id", (req, resp) => {
	const id = req.params.id;
	const userFind = users.find((user) => user.id === id);
	userFind ? resp.send(userFind) : resp.status(404).send("User not found");
});

module.exports = routerUsers;
