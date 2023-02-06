# rabbitmq-poc
A super very very simple Proof of Concept for running consumers on RabbitMQ. Here to simulate a heavy processing the producer basically sends a message containing the total seconds the consumer will be "busy".

Instructions:
- On a terminal `./start-rabbit.sh` - starts a RabbitMQ docker container
- Start as many terminals as you want for the number of consumers as you want and run `./consumer.js` on each
- Run the producer to send messages so that they can be picked up by the consumers: `./producer.js [seconds]` - the parm is optional. It stops right after sending the message, then you will have to run it again for producing more messages.

The default routing message configuration for RabbitMQ uses Round Robin, meaning the first consumer to connect to it will receives the first msg, then the second to connect gets the next msg, and so on.

