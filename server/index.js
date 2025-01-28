//creating our API
// building our nodejs and express server

const express = require('express')
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(cors());

app.use(express.json());


const postRoute = require("./routes/Posts");
app.use('/posts', postRoute);


db.sequelize.sync().then(() => {
app.listen(3001, () => {
    console.log("server is runing on port 3001");
})
});
