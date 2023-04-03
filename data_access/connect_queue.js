import amqp from 'amqplib';
import constant from '../use_case/constant.js';
import transaction_controller from '../controllers/transaction.controller.js';

let channel;

async function connect_queue(url) {
    connection = await amqp.connect(url)
        .then(() => {
            console.log('Queue connected successfully');
        })
        .catch((error) => {
            console.error(`Queue connection error: ${error}`);
        });
    channel = await connection.createChannel();
    await channel.assertQueue(constant.queueName);
}

async function consume_transaction() {
    let update;
    await channel.consume(constant.queueName, data => {
        update = JSON.parse(data.content);
        if (data) {
            transaction_controller.get_transactions(update.walletAddress, update.currencyType)
                .then((res) => {
                    console.log(res); // a logger will be need here

                    channel.ack(data);
                })
                .catch((error) => {
                    console.log(error); // a logger will be needed here
                });
        }
    })
    return update;
}

export default connect_queue;