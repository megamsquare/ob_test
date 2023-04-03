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