const router = require('express').Router;

router.get('/in', async (req, res) => {
    try {
        res.status(200).json('here')
    } catch (err) {
        console.log('error in getting login screen' + err);
    }
});