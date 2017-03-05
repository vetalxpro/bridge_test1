const router            = require('express').Router();
const departmentsRouter = require('./departments-router');

router.use('/departments', departmentsRouter);

module.exports = router;