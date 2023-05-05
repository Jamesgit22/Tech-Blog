const router = require('express').Router();
// const Auth = require('../utils/auth');

router.get('/', (req, res) => {
    res.console.log('Its alive!')
})

module.exports = router;