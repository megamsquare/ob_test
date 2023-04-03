# Backend Test

if you have docker and docker compose install, you can run:

```bash
docker-compose up
```

if you don't have docker compose or docker install or if you're having difficulty you can run:

```bash
npm run dev
```
make sure RabbitMQ and postgreSQL are installed on your system and 

The solution requires a Transactions Microservice that listens for "UpdateTransactions" commands on the RabbitMQ message broker. Upon receiving a command, the microservice will query a third-party crypto API to retrieve a list of transactions for the specified wallet address. The microservice should then check for new transactions and publish a "NewTransaction" event to the event bus for each new transaction.

To avoid publishing duplicate transactions, the microservice should track unique requests to update a client's transactions. This can be achieved by saving this information to a relational database. The microservice should also ensure that a transaction is only published to the event bus once.

To retrieve transactions via a REST API, the solution should implement a basic read functionality. The caching strategies can also be applied to improve performance.

In summary, the expected architecture of the solution includes a Transactions Microservice, RabbitMQ message broker, third-party crypto API, event bus, and relational database e.g. PostgreSQL. The solution should also implement a REST API for retrieving transactions.

This process is divided in appropriate sections for each module to be scalable, it can be improved by caching the transaction details for future request, and other factors like separation of few logics,

I am working on using the queue listener to listen for any incoming message from the queue and use the message content to validate if it exist in the database if it exist, the message is depatched and we move to the next message. If it doesn't exist, I convert the message content 