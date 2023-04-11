import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use('/', Routes);

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
const URL_DB = process.env.URL_DB;
console.log(URL_DB)
const portNumber = process.env.PORT_NUMBER;



connection(URL_DB);

app.listen(portNumber, () => console.log(`Server is running successfully on PORT ${portNumber}`));