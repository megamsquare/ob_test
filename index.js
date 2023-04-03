import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import db from './data_access/connect_db.js';
import queue from './data_access/connect_queue.js';

const port = process.env.APP_PORT || 3000;

const app =  express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

async function start() {
    try {
        await queue();
        await db();
        app.listen(port, () => {
            console.log(`Server is listening to port ${port}...`);
        });
    } catch (error) {
        onsole.log(`server error: ${error}`);
    }
}

start();