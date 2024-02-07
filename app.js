import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import indexRouter from './routes/index.js'
import path from 'path';
import { __dirname } from './utils.js'

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());


app.use('/', indexRouter);

export default app

