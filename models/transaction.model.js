async function transaction_table(client) {
    const query = `
        CREATE TABLE IF NOT EXISTS "transaction" (
            "id" SERIAL,
            "user_id" VARCHAR(100) NOT NULL,
            "wallect_address" VARCHAR(15) NOT NULL,
            "currency_type" VARCHAR(15) NOT NULL,
            PRIMARY KEY ("id")
        );
    `;

    return query
}

export default transaction_table;

// APP_PORT = 3000

// DB_NAME = 'postgresql'
// DB_USER = 'postgresql'
// DB_PASSWORD = ''
// DB_HOST = 'localhost'
// DB_PORT = 5432
// DB_SSL = true

// QUEUE_URI = 'amqp://guest:guest@localhost:5672'
