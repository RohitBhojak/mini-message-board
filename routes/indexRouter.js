const { Router } = require("express");
const { renderHomePage, renderForm } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", renderHomePage);

indexRouter.get("/new", renderForm);

module.exports = indexRouter;
