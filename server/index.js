import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

//* Development dependencies
import chalk from 'chalk';

//? Custom dependencies
import dbConnect from './utils/database.js';

const app = express();

//? Requirements
dotenv.config();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

import paramRoutes from './routes/params.routes.js';

app.use('/api', paramRoutes);

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error in starting server');
        console.log(chalk.red(`Error in starting server: ${err}`));
        process.exit(1);
    }

    dbConnect();

    console.log(chalk.blue(`Server running on port ${PORT}`));
});
