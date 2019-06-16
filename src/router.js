const express = require("express");
const router = express();

const indexRouter = require("./routes/index");

router.use("/", indexRouter);

module.exports = router;
