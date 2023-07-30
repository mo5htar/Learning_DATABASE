const mysql2 = require("mysql2/promise");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

const connection = mysql2.createPool({
  user: "root",
  password: "example",
  connectionLimit: 10,
  database: "LearningMYSQL",
  port: "8080",
});

const db = await connection().then(() => {
  console.log(`Server connected to MYSQL_DB successfully!!`);
});

const port = 3000;
const app = require("./index");

const server = app.listen(port, () => {
  console.log(`Server is listen in port: ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});
