import express from "express";

import { MongoClient, ServerApiVersion } from "mongodb"

import cors from "cors";

const app = express()


const port = process.env.PORT || 5000;

const uri = "mongodb+srv://ANAMERASUL007:ANAMERASUL007@cluster0.8t0mz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object

    console.log("db connected")
    client.close();

});

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send(` running my curd nod de`)

});

app.listen(port, () => {
    console.log("Listening to port", port)
})

