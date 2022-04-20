import express from "express";

import cors from "cors";

const app = express()


const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send(` running my curd nod de`)

});

app.listen(port, () => {
    console.log("Listening to port", port)
})