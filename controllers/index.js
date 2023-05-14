const router = require('express').Router();

// const apiRoutes = require('./api');
const startRoutes = require('./start.js');
const loginRoute = require('./login.js')
const apiRoutes = require('./api')

router.use('/', startRoutes);
router.use('/login', loginRoute);
router.use('/api', apiRoutes);

module.exports = router;