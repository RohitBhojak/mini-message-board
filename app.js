const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const PORT = process.env.PORT;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Port running on:", PORT);
});
