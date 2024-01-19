//displaying the main page
const express = require('express')
const router = express.Router();

router.get('/blog', (req, res) => {
    res.render("blog-single")
})



module.exports = router;