const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.port || 3001;

const routerUsers = require("./routers/users/index.js");

app.use(cors());
app.use("/api/users", routerUsers);

// HOME
app.get("/", (request, response) => {
	response.send("Users api");
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:3001`);
});
