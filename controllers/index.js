const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const logRoutes = require('./logRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/log', logRoutes);

module.exports = router;