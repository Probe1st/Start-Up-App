import express from 'express';
import { getAllBooks } from './models/books.js';

const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.send("work");
});

app.get("/restaurants", async (req, res) => {
    res.send(await getAllBooks("http://localhost:1337/api/restaurants"));
});

app.listen(process.env.PORT, (err) => {
    err ? (
        console.error("error: " + err)
    ) : (
        console.log("listening on address http://localhost:" + process.env.PORT)
    )
});