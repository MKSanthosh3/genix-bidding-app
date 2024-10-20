Genix Auctions Setup Documentation

Welcome to the Genix Auctions App setup guide. This document provides comprehensive and easy-to-follow instructions to help you set up and run the application seamlessly. As a senior full-stack developer, you will find best practices embedded in each of these steps to ensure smooth deployment and maintainability of the application.

Overview

Genix Auctions App is a full-stack web application designed to facilitate online auctions. Users can register, create auction items, and place bids. The application follows a modular approach and is built with Angular on the front end, Node.js with Express for the backend, and MySQL as the database.

Tech Stack

Frontend: Angular 16 with NgRx for state management.

Backend: Node.js with Express.js.

Database: MySQL.

Prerequisites

Node.js & npm: Ensure that Node.js (v14 or later) and npm (v6 or later) are installed.

MySQL: Install MySQL and ensure it's running locally or on a server you can access.

Angular CLI: Install Angular CLI globally using npm:

Developer Information

Developed by Muthu Krishna Santhosh

Security

Password Hashing: We use bcrypt for secure password hashing.

Authentication: User authentication is handled securely using JSON Web Tokens (JWT).

Responsiveness and Compatibility

Cross-Browser Compatibility: The application has been tested to work smoothly across all major browsers (Chrome, Firefox, Safari, Edge).

Screen Sizes: The UI is responsive and adjusts seamlessly to large, medium, and small screens, including mobile devices, ensuring a consistent user experience.

Genix Auctions App

This project was generated with Angular CLI version 16.1.4.

Frontend Setup

Step 1: Clone the Repository

Replace <repository-url> with the URL of your repository.

Step 2: Navigate to the Project Directory

Replace <project-folder-name> with the name of the cloned repository.

Step 3: Install Dependencies

Step 4: Run the Project

Step 5: Open the Project in a Browser

Navigate to: http://localhost:4200/auctions/auctions-dashboard

Backend Setup

Step 1: Clone the Repository

Replace <repository-url> with the URL of your repository.

Step 2: Navigate to the Project Directory

Replace <project-folder-name> with the name of the cloned repository.

Step 3: Install Dependencies

Step 4: Set Environment Variables

Create a .env file in the root of the project if it doesn't exist.
Add the necessary environment variables as specified in .env.example or as required by the application.

Example:

Step 5: Run the Project

Or, if you are using nodemon for automatic restarts:

Step 6: Test the API

Open your browser or use a tool like Postman to access the API at:

http://localhost:60532

Replace 60532 with the port number set in your .env file if different.

Build

Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

Further Help

To get more help on the Angular CLI, use ng help or go check out the Angular CLI Overview and Command Reference page.

Developed By

Muthu Krishna Santhosh
