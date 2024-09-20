// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3100;

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send('Trade Machine Service Server');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Order Service Server is running on http://localhost:${PORT}`);
});