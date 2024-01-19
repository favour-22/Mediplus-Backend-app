const { app, port } = require("./config/config")


app.listen(port, () => {
    console.log(`Server Started on localhost port ${port}`);
})