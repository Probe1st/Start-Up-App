import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("work");
});

app.listen(process.env.PORT, (err) => {
    err ? (
        console.error("error: " + err)
    ) : (
        console.log("listening on address http://localhost:" + process.env.PORT)
    )
});