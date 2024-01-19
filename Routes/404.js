
const express = require('express')
const router = express.Router();

router.get('/page-not-found', (req, res) => {
    res.render("404")
})



module.exports = router;