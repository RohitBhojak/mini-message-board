const { Router } = require("express");
const { renderHomePage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", renderHomePage);

// indexRouter.get("/new");

module.exports = indexRouter;
