import express from "express";

// import mysql from "mysql";


import { MongoClient, ServerApiVersion, ObjectId } from "mongodb"



import cors from "cors";



const app = express()

const myobjectid = ObjectId.ObjectId





const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json())

const uri = "mongodb+srv://ANAMERASUL007:ANAMERASUL007@cluster0.8t0mz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// const run = async () => {
//     try {
//         await client.connect();
//         const usercollection = client.db("foodexpress").collection("users");

//         const users = { name: 'mahi', email: 'mahi@gmail.com' }
//         const result = await usercollection.insertOne(users)
//         console.log(`inserted with the _id: ${result.insertedId}`)

//     } finally {
//         // await client.close();
//     }

// }
// run().catch(console.dir);
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: ""
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//     })
// })


// const conc = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mydb"
// });

// conc.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     conc.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });


const run = async () => {
    try {
        await client.connect();
        const userCollection = client.db('foodexprss').collection('user')


        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query)

            const users = await cursor.toArray()

            res.send(users)

        })

        // post user
        app.post('/user', async (req, res) => {

            const newUser = req.body

            console.log('adding new user', newUser)

            const result = await userCollection.insertOne(newUser)

            res.send(result)


        })

        app.delete('/user/:id', async (req, res) => {

            const id = req.params.id;

            const query = { _id: myobjectid(id) };

            res.send(query)
        })

    }

    finally {
        // await client.close();
    }
}

run().catch(console.dir)



app.get("/", (req, res) => {
    res.send(` running my curd nod de`)

});

app.listen(port, () => {
    console.log("Listening to port", port)
})

