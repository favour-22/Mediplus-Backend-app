const express = require('express');
const app = express();
const port = 8000;


const homeRouter = require("../Routes/homeRouter")
const contactRouter = require("../Routes/contactRouter")
const blogRouter = require("../Routes/blogRouter")
const notRouter = require("../Routes/404")
const errHandler = require("../middleware/errHandler")


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(homeRouter)
app.use(contactRouter)
app.use(blogRouter)
app.use(notRouter)
app.use(errHandler)

module.exports = { app, port }