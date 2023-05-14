const router = require('express').Router();
const { User } = require('../models');

router.get('/', (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json({message: 'Error in loading login page:' + err})
    }
});

module.exports = router;
