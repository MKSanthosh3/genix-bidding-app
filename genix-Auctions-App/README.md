# Genix Auctions Setup Documentation

Welcome to the Genix Auctions App setup guide. This document provides comprehensive and easy-to-follow instructions to help you set up and run the application seamlessly. As a senior full-stack developer, you will find best practices embedded in each of these steps to ensure smooth deployment and maintainability of the application.

## Overview

Genix Auctions App is a full-stack web application designed to facilitate online auctions. Users can register, create auction items and place bids. The application follows a modular approach and is built with Angular on the front end, Node.js with Express for the backend, and MySQL as the database.

### Tech Stack:

- **Frontend**: Angular 16 with NgRx for state management.
- **Backend**: Node.js with Express.js.
- **Database**: MySQL.

## Prerequisites

1. **Node.js & npm**: Ensure that Node.js (v14 or later) and npm (v6 or later) are installed.
2. **MySQL**: Install MySQL and ensure it's running locally or on a server you can access.
3. **Angular CLI**: Install Angular CLI globally using npm:

## Security

1. **Password Hashing**: We use `bcrypt` for secure password hashing.
2. **Authentication**: User authentication is handled securely using JSON Web Tokens (JWT).


# GenixAuctionsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

## To Execute the Angular Genix Auctions App frontEnd

## Step 1: Clone the Repository

git clone <repository-url>
Replace <repository-url> with the URL of your repository.

## Step 2: Navigate to the Project Directory

cd <project-folder-name>/Project/NewApp/genix-Auctions-App
Replace <project-folder-name> with the name of the cloned repository.

## Step 3: Install Dependencies

npm install

## Step 4: Run the Project

ng serve

## Step 5: Open the Project in a Browser

Navigate to: http://localhost:4200/auctions/auctions-dashboard


# To Execute the Node.js API Project


## Step 1: Clone the Repository

git clone <repository-url>
Replace <repository-url> with the URL of your repository.

## Step 2: Navigate to the Project Directory


cd <project-folder-name>/genix-Auctions-App\genix-auctions-backend
Replace <project-folder-name> with the name of the cloned repository.

## Step 3: Install Dependencies

npm install

## Step 4: Set Environment Variables

Create a .env file in the root of the project if it doesn't exist.
Add the necessary environment variables as specified in .env.example or as required by the application.

Example:
PORT=3000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password


## Step 5: Run the Project

npm start
Or, if you are using nodemon for automatic restarts:

## Step 6: Test the API Open your browser or use a tool like Postman to access the API at:

http://localhost:60532
Replace 3000 with the port number set in your .env file if different.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Developed by
Muthu Krishna Santhosh
