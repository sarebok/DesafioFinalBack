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
import eventIdRouter from './routes/eventIdRouter.js';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';


const app = express();
/* const PORT = process.env.PORT || 3000; */


//for swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A simple Express API',
    },
  },
  apis: ['./routes/*.js', './swagger.js'], // include swagger.js here
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


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
app.use('/event/', eventIdRouter);


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
  
  /* module.exports = app; */