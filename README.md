# Naya Nivas | MERN Stack Real Estate Platform

Naya Nivas is a full-stack real estate platform built using the MERN (MongoDB, Express, React, Node.js) stack. The platform allows users to seamlessly buy, sell, and rent properties while offering direct communication between buyers, renters, and property owners. The application is fully responsive, providing a great user experience on both desktop and mobile devices.

## Features
- **Buy, Sell, Rent**: Users can browse properties available for purchase, sale, or rent.
- **Direct Communication**: Buyers/renters can communicate directly with property owners through integrated messaging.
- **Responsive Design**: Optimized for mobile and desktop users to enhance engagement on all devices.

## Project Demo
You can view the live site here: [Naya Nivas Live Demo](https://nayanivas-rent-sell-buy-property.onrender.com/)

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: Redux (if applicable)
- **Styling**: CSS/Bootstrap (or any other library you used)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/naya-nivas.git
   cd naya-nivas
   
2 Install server-side dependencies:

       npm install
       
3. Install client-side dependencies:
   
         npm install --prefix client

5. Set up environment variables. Create a .env file in the root directory and add the following:

         MONGO_URI=your_mongodb_connection_string
         JWT_SECRET=your_jwt_secret_key
         PORT=5000

6. Run the application in development mode:
   
         npm run dev

8. To build the production version of the client:
   
         npm run build

## Usage
    Once the app is running locally, visit http://localhost:5000 in your browser to interact with the platform.

## Project Structure

    Naya-Nivas/
    │
    ├── api/               # Backend (Node.js, Express)
    ├── client/            # Frontend (React.js)
    ├── .env               # Environment variables
    ├── package.json       # Dependencies and scripts
    └── README.md          # This file

## Scripts
    npm run dev: Starts the backend with nodemon for live reloading.
    npm run start: Starts the backend in production mode.
    npm run build: Installs dependencies and builds the React client for production.

## Dependencies
    express: Web framework for Node.js
    mongoose: MongoDB object modeling tool
    bcryptjs: For password hashing
    jsonwebtoken: For authentication using JWT
    cookie-parser: Middleware for parsing cookies
    dotenv: Loads environment variables from .env
    nodemon: Tool for auto-restarting the server during development
