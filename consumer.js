#!/usr/bin/env node

const amqp = require('amqplib/callback_api');
const queue = 'task_queue';

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    // This makes sure the queue is declared before attempting to consume from it
    channel.assertQueue(queue, {
      durable: true
    });

    channel.consume(queue, function(msg) {
      const secs = msg.content.toString();

      console.log(" [x] Msg Received - waiting for '%s's - %s", msg.content.toString(), new Date());

      setTimeout(function() {
	 console.log(" [x] Done - %s", new Date());
      }, secs * 1000);
    }, {
	  // automatic acknowledgment mode
	  noAck: true
	});	
  });

});
