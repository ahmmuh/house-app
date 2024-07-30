import express from 'express';
import cors from 'cors';
import houseRoutes from './routes/house-routes.js';
import crudRoutes from './routes/crud-house-route.js';
import { getConnection } from './database/db-connection.js';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', houseRoutes);


app.use('/api', crudRoutes)

app.use((req, res, next) => {
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    getConnection();
});
