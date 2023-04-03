import amqp from 'amqplib';
import constant from '../use_case/constant.js';

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
    })
    return update;
}

export default connect_queue;