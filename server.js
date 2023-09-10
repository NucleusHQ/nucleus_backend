const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.databaseToken, {useNewUrlParser: true})


const db = mongoose.connection

db.on("error", (error) => {
    console.error(error);
})

db.once("open", () => {
    console.log("Connected to Database");
})

app.use(express.json());

const membersRouter = require("./routes/members");
app.use('/members', membersRouter); //localhost:3000/members ==> everything that starts like this will go into the members route

app.listen(3000, () => console.log("Server Started"));

