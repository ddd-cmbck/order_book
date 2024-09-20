// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import {Kafka} from 'kafkajs';
import { WebSocketServer, WebSocket } from 'ws';

dotenv.config();

/* Create express application */
const app = express();
const PORT = process.env.PORT || 3000;

const  wss = new WebSocketServer({port: 3002});


wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected to the WebSocket');

    ws.on('message', (message: string) => {
      const order = JSON.parse(message);
      console.log('Received data is', order);
    })

    ws.on('close', () => {
      console.log('Client disconnected');
    });
});

app.listen(PORT, () => {
  console.log(`Order Service Server is running on port ${PORT}`);
})


