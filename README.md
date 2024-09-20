# Project Overview 

This project is an ongoing journey where I’m building a seamless
and efficient order book that processes and manages trading
orders in real-time. Below is an overview of how the system is structured
and what it aims to achieve.

## Tech Stack 🛠️

### Frontend 🌐
The frontend is crafted using TypeScript combined with Vite,
which offers a modern and blazing-fast development experience.
My goal here is to ensure that users have a smooth and responsive interface,
where they can easily place and track their orders.

### Backend ⚙️
On the backend, I utilize Node.js, enhanced with TypeScript, 
to maintain a clean, scalable, and debuggable codebase. 
TypeScript’s strong typing helps catch errors early,
making development more efficient and reliable.

### Communication 💬
- **WebSockets:** I leverage WebSockets for real-time, 
bidirectional communication between the frontend and backend.
This allows for instant updates and interactions, which are crucial in a
trading environment.
- **Kafka:** For inter-service communication,
Kafka is employed to ensure reliable message delivery
between my microservices, following an **"at least once"** delivery guarantee.
This setup helps maintain data consistency and reliability across the system.

## Microservices Architecture 🧩

The system is divided into three key microservices,
each serving a distinct purpose:

### 🛒 **Order Service (localhost:3000)**
- **Role:** This service handles incoming order requests from the frontend.
It’s the entry point where orders are validated and prepared for further 
processing.
- **Future Enhancements:** Integration with a banking system for 
payment validation and further financial checks will be added soon. 💳

### 🔄 **Trade Machine Service (localhost:3100)**
- **Role:** This service is the brain of the operation, managing all order book logic and executing necessary calculations to match and process orders efficiently.

### 📊 **Order Book Service (localhost:3050)**
- **Role:** This service continuously updates the frontend with the latest order statuses and book updates. Additionally, it will gather statistics to provide insights into trading patterns and system performance.
- **Future Enhancements:** I plan to add comprehensive statistics collection and analysis to help users better understand market trends and their trading activities. 📈

## Database 🗄️

I am using **MongoDB** to store user data, order book data,
and all trading orders. MongoDB’s flexibility and performance make it
an ideal choice for my needs, allowing me to handle large datasets with ease and adapt quickly 
to evolving data requirements.

## The Road Ahead 🛤️

This project is more than just an order book;
it’s a continuously evolving system designed to adapt and grow.
I am committed to improving and expanding the capabilities of these services,
with planned enhancements to make the system even more robust and user-friendly.
Stay tuned for more updates! 🎉

---

## Installation 🛠️

To get this project up and running locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/ddd-cmbck/order_book
cd order_book
```
## 2. Install Dependencies

Each microservice has its own set of dependencies,
which can be installed using `npm`.

## 3.Install for the Main Project:

```bash
npm install
```

## 4. Install Dependencies

### Order Service:

```bash
cd order_service
npm install
```

### Trade Machine Service:

```bash
cd trade_machine_service
npm install
```

### Order Book Service:

```bash
cd order_book_service
npm install
```

### Frontend:

```bash
cd frontend
npm install
```

## 2. Setup Kafka

- Version: `kafka_2.13-3.8.0`.

---

## Technical Information 

### Main `package.json` Configuration

- **Service Version**: `1.0.0`
- **Dependencies**:
    - `concurrently`: `^7.0.0`

#### Order Service

- **URL**: `http://localhost:3000`
- **Service Version**: `1.0.0`
- **Dependencies**:
    - `express`: `^4.18.2`
    - `mongoose`: `^7.4.3`
    - `dotenv`: `^16.3.1`
- **DevDependencies**:
    - `typescript`: `^5.2.2`
    - `ts-node`: `^10.9.1`
    - `ts-node-dev`: `^2.0.0`
    - `@types/express`: `^4.17.17`
    - `@types/mongoose`: `^5.11.97`

#### Trade Machine Service

- **URL**: `http://localhost:3100`
- **Service Version**: `1.0.0`
- **Dependencies**:
    - `express`: `^4.18.2`
    - `kafkajs`: `^2.1.0`
    - `dotenv`: `^16.3.1`
- **DevDependencies**:
    - `typescript`: `^5.2.2`
    - `ts-node`: `^10.9.1`
    - `ts-node-dev`: `^2.0.0`
    - `@types/express`: `^4.17.17`

#### Order Book Service

- **URL**: `http://localhost:3050`
- **Service Version**: `1.0.0`
- **Dependencies**:
    - `express`: `^4.18.2`
    - `mongoose`: `^7.4.3`
    - `dotenv`: `^16.3.1`
- **DevDependencies**:
    - `typescript`: `^5.2.2`
    - `ts-node`: `^10.9.1`
    - `ts-node-dev`: `^2.0.0`
    - `@types/express`: `^4.17.17`
    - `@types/mongoose`: `^5.11.97`

### Kafka Configuration

- **Kafka Version**: `kafka_2.13-3.8.0`

### Operating System

- **Ubuntu Version:** `22.04`

---