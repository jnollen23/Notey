const router = require('express').Router();

const notes = require('./notes');
const api = require('./api');

router.use("/api", api);
router.use('/notes',notes);

module.exports = router;