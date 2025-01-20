//creating our API
// building our nodejs and express server

const express = require('express')
const app = express();
const db = require("./models");


db.sequelize.sync().then(() => {
app.listen(3001, () => {
    console.log("server is runing on port 3001");
})
});

/*//next will will create our database the database we will be using in this project will be mysql

//first we will create the database table here
// we can use a sql um to make the write from our code to the data base easy


creating the table*/
