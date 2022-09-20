const app = require("express")();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const Login = require("./routes/login.route");
const Worker = require("./routes/worker.route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//APIS FOR AUTH
app.use("/auth", Login);

//APIS FOR REGISTER WORKER
app.use("/worker", Worker);

//create api login using database

// 404 Error
// app.use((req, res, next) => {
//   next(createError(404, "Not Found"));
// });

// app.use(function (err, req, res, next) {
//   next(createError(500, "Internal Server Error"));
//   if (!err.statusCode) err.statusCode = 500;
//   return res.status(err.statusCode).send(err.message);
// });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
