# In the Loop

Description

## Table of Contents

- [What is this?](#what-is-this?)
- [What did I learn?](#what-did-I-learn?)
- [Project Next Steps](#project-next-steps)
- [Project Status](#project-status)
- [Setup to Run Locally](#setup)
- [Original Project Brief](#original-project-brief)

## What is this? <a name="what-is-this?"></a>

## What did I learn during the project week? <a name="what-did-I-learn?"></a>

## Project Next Steps <a name="project-next-steps"></a>

### Refactoring Goals

### Goals for New Features

## Project Status <a name="project-status"></a>

## Setup to Run Locally <a name="setup"></a>

**To clone the repo:**

```
git clone git@github.com:cdmclellan7/in-the-loop.git
cd in-the-loop
```

**To run the frontend:**

First change frontend/src/config.js by commenting out line one and uncommenting line two like this:

```
//export const baseBackendURL = "https://in-the-loop-backend.herokuapp.com";
export const baseBackendURL = "http://localhost:3001"; //dev URL

```

Then run the frontend.

```
cd frontend
npm i
npm start
```

And go to http://localhost:3000

**To setup the database tables with starter data:**

First create a .env file in /backend and add your database connection string

```
DATABASE_URL=your-URL
```

Then create and populate the tables.

```
cd backend
npm run db-create-and-populate-all-tables
```

**To run the backend:**

```
cd backend
npm i
npm run dev
```

And go to http://localhost:3001

## Original Project Brief <a name="original-project-brief"></a>
