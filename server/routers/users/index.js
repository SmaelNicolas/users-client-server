const express = require("express");
const { users } = require("../../data/users");

const userNotFound = "User not found";
const routerUsers = express.Router();

routerUsers.use(express.json());

// all users
routerUsers.get("/", (req, resp) => {
	resp.send(users);
});

routerUsers.get("/:id", (req, resp) => {
	const id = req.params.id;
	const userFind = users.find((user) => user.id === id);
	userFind ? resp.send(userFind) : resp.status(404).send(userNotFound);
});

routerUsers.get("/:id/:value", (req, res) => {
	const { id, value } = req.params;
	const userFind = users.find((user) => user.id === id);
	!userFind && res.status(404).send(userNotFound);
	userFind[value]
		? res.send(userFind[value])
		: res.status(404).send(`Value not found for user ${id}`);
});

module.exports = routerUsers;
