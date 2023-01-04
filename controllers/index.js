const router = require('express').Router();

// const router = require("./api");

// const apiRoutes = require('./api/');

// router.use('/api', apiRoutes);



router.use("/", (req, res) => res.render("test"));

module.exports = router;
