const { Router } = require("express");
const { renderHomePage, renderForm, createMessage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", renderHomePage);

indexRouter.get("/new", renderForm);

indexRouter.post("/new", createMessage);

module.exports = indexRouter;
