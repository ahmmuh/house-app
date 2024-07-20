
import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());



app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Hello World!");
})


app.listen(() =>{
    console.log(`Listening on port ${PORT}`);
})


