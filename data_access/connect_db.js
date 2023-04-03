import pg from 'pg';
import transaction_table from '../models/transaction.model.js';

async function connect_db() {
     const client = new pg.Client({
        user: process.env.DB_USER || 'postgresql',
        host: process.env.DB_HOST,
        database: process.env.DB_NAME || 'postgresql',
        password: process.env.DB_PASSWORD || '',
        port: process.env.DB_PORT,
     });

     client.connect();
     client.query(transaction_table);
}

export default connect_db;