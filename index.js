const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const functions = require("firebase-functions");


mongoose.connect(process.env.DATABASE_TOKEN, {useNewUrlParser: true})


const db = mongoose.connection

db.on("error", (error) => {
    console.error(error);
})

db.once("open", () => {
    console.log("Connected to Database");
})

app.use(express.json());
app.use(cors());

const membersRouter = require("./routes/members");
const prospectsRouter = require("./routes/prospects");
const customerRouter = require("./routes/customers");
const confirmationRouter = require("./routes/confirmation");

app.use('/api/members', membersRouter);
app.use('/api/prospects', prospectsRouter);
app.use('/api/customers', customerRouter);
app.use('/api/confirmation', confirmationRouter);

app.listen(3000, () => console.log("Server Started"));

exports.app = functions.https.onRequest(app); 