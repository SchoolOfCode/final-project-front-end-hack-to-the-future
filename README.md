a# In the Loop

Description

## Table of Contents

- [What is this?](#what-is-this?)
- [What did I learn?](#what-did-I-learn?)
- [Tech Stack](#tech-stack)
- [Project Next Steps](#project-next-steps)
- [Project Status](#project-status)
- [Setup to Run Locally](#setup)
- [Original Project Brief](#original-project-brief)

## What is this? <a name="what-is-this?"></a>

## What did I learn during the project week? <a name="what-did-I-learn?"></a>

## Tech Stack <a name="tech-stack"></a>

Our tech stack is a React frontend deployed to Netlify.
And a Node/Express REST API deployed to Heroku with a Postgres database.
We chose this stack because we all had some foundational knowledge and skills, so we knew we could build a polished MVP.

Our learning focus was on testing and CI/CD. For the frontend we wrote tests using Cypress, Jest, and the React Testing Library. On the backend we wrote tests with Postman, Jest, and Supertest. We also made a CI/CD pipeline with GitHub Actions to automatically run integration tests and deploy the backend code to Heroku.

## Project Next Steps <a name="project-next-steps"></a>

### Short-term: Email notifications for users
- Activity sign-up / creation confirmations to attendees and hosts
- Upcoming activity reminders


### Medium-term: User profiles
- Personalised
- Option to view other users / be viewed
- Activity hosts can view attendees for their activity


### Long-term: Chat feature
- Hosts can make activity 'announcements' that get sent to all confirmed attendees
- Group chat for individual activities
- Safety and security measures


## Project Status <a name="project-status"></a>

## Setup to Run Locally <a name="setup"></a>

**To clone the repo:**

```
git clone git@github.com:SchoolOfCode/final-project-front-end-hack-to-the-future.git
cd final-project-front-end-hack-to-the-future
```

**Create an .env file**

Create an .env file in the root folder with the following environment variables:

```
REACT_APP_API_URL=<backend url>
REACT_APP_AUTH0_DOMAIN=<your Auth0 domain>
REACT_APP_AUTH0_CLIENT_ID=<your Auth0 client ID>
```

**To run the frontend:**

```
npm i
npm start
```

And go to http://localhost:3000

**To run tests:**

Go to the testing branch and install dependencies if needed

```
git checkout dev-cypress
npm i
```

To run Jest unit tests:

```
npm test
```

To run Cypress tests:

```
npm run cypress:open
```

## Original Project Brief <a name="original-project-brief"></a>
