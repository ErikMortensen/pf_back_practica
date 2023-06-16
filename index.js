const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;

conn.sync({ alter: true }).then(() => {
	server.listen(PORT, () => {
		console.log(`Listening at port: ${PORT}`); // eslint-disable-line no-console
	});
});
