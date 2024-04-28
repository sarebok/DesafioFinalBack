//create basic server
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import loginRouter from "./routes/loginRouter.js";
import cors from 'cors';
/* import { logRoute } from './src/helpers/helpers.js'; */
/* import { Logger } from 'logger'; */

import pool from "./db/db.js";
import clientRouter from './routes/clientRouter.js';
import projectRouter from './routes/projectRouter.js';
import sponsorRouter from './routes/sponsorRouter.js';
import eventRouter from './routes/eventRouter.js';


const app = express();
/* const PORT = process.env.PORT || 3000; */

const PORT = 3000;
//include basic middleware
app.use(express.json());
app.use(cors());


//manage routes
app.use('/', loginRouter);
app.use('/clients', clientRouter);
app.use('/projects', projectRouter);
app.use('/sponsors', sponsorRouter);
app.use('/events', eventRouter);


pool.query('SELECT 1', (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
    } else {
      console.log('Database connected successfully');
    }
  });



app.get('/', (req, res) => {
    res.send('Hello Gary!');
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
  module.exports = app;