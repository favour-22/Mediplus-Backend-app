//displaying the main page
const express = require('express')
const router = express.Router();

router.get('/contact', (req, res) => {
    res.render("contact")
})



module.exports = router;