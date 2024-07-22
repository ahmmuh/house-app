import express from "express";
import houseRouter from "./routes/house-route.js";
import {getConnection} from "./database/db-connection.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", houseRouter);

app.listen(PORT, () => {
    getConnection();
});
