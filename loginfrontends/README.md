# LoginFrontends

This repository contains a collection of custom login page frontends built with React. The idea is to have a single application that can easily switch between different login designs via environment variables and custom npm scripts.

## Project Structure

An example folder structure for this project:

LoginFrontends/ ├── node_modules/ ├── public/ │ └── index.html ├── src/ │ ├── App.js # Main application entry point │ ├── index.js # Application bootstrap file │ └── components/ │ └── scrumDaddy/ │ ├── LoginPage.js │ ├── SignupPopup.js │ ├── LoginPage.css │ └── SignupPopup.css ├── package.json └── README.md

## Getting Started

### 1. Install Dependencies

Clone the repository, navigate to the project root, and run:

```bash
npm install
```

### 2. Running the App

To launch the application with the default settings:

```bash
npm start
```

TO launch the application with a specified login demo (scrumDaddy for example):

```bash
npm run start:scrumDaddy
```
