import express from 'express';
import houseWebRoutes from './routes/house-web-route.js';
import appRoutes from './routes/api-routes.js';
import { getConnection } from './database/db-connection.js';
import path from 'node:path';
import { getDirname } from './utils/filePath.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(getDirname(import.meta.url), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(getDirname(import.meta.url), 'views'));
app.set('view engine', 'ejs');

app.use('/web', houseWebRoutes);
app.use('/api', appRoutes); // Se till att importera apiRoutes från rätt fil

app.listen(PORT, () => {
    getConnection();
});
