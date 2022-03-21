a# In the Loop

Description

## Table of Contents

- [What is this?](#what-is-this?)
- [What did I learn?](#what-did-I-learn?)
- [Tech Stack](#tech-stack)
- [Design and Development Process](#process)
- [Project Next Steps](#project-next-steps)
- [Project Status](#project-status)
- [Setup to Run Locally](#setup)
- [Original Project Brief](#original-project-brief)

## What is this? <a name="what-is-this?"></a>

## What did we learn during the project month? <a name="what-did-I-learn?"></a>

- ### Agile Methodology
  As our first large project working as a team, we wanted to learn and implement Agile methodology into our development process. Focusing on a good collaborated interaction development process between pair programming, task branching, code reviews, adaptable code development, continuous integration, and regular release cadences.  

- ### Github Branching
  For every repository we created 2 branches, deployment branch, and development branch. Also we disigned a pattern program for every new feature, or new code that we implemented, since creating a new branch, making code reviews, mergin to the development branch, and finally to the main branch.  

- ### Testing

  - #### Supertest
  - #### React-Jest-test
  - #### Cypress
  

## Tech Stack <a name="tech-stack"></a>

![Tech Stack Diagram](/readme_images/tech_stack.jpg)

Our tech stack is a React frontend deployed to Netlify.
And a Node/Express REST API deployed to Heroku with a Postgres database.
We chose this stack because we all had some foundational knowledge and skills, so we knew we could build a polished MVP.

Our learning focus was on testing and CI/CD. For the frontend we wrote tests using Cypress, Jest, and the React Testing Library. On the backend we wrote tests with Postman, Jest, and Supertest. We also made a CI/CD pipeline with GitHub Actions to automatically run integration tests and deploy the backend code to Heroku.

## Design and Development Process <a name="process"></a>

### Brainstorming

The team used a Miro Board to brainstorm initial app ideas. We used dot voting to narrow down our choices and Disney Ideation to define our MVP.

![Dot Voting](/readme_images/dot_voting.JPG)
![Disney Ideation](/readme_images/disney_ideation.JPG)

### UX/UI Planning

We took a user-centric approach to design by first creating user personas, user stories, and a user flow diagram.

#### User Personas

![User Persona 1](/readme_images/persona1.JPG)
![User Persona 2](/readme_images/persona2.JPG)
![User Persona 3](/readme_images/persona3.JPG)

#### User Stories

- As Bob, I want an easy way to find small group activities so that I can meet new people in my city.
- As Bob, I want to see events that are based around my interests so that I can have things in common with the people I meet.
- As Sally, I want to host activities without much admin so that I can quickly organise and plan meetups.
- As Sally, I want to see activities that are based outside so that I can attend in person meetups that interest me.
- As Mohammed, I want to find meetups for men that are also trying to stay active so that I can keep fit and chat about our shared experiences.
- As Mohammed, I want to see how many people are planning to attend the meetup so that I can go to gatherings that will be well attended.

#### User Flow Diagram

![User Flow Diagram](/readme_images/user_flowchart.jpg)

### Design

We created low-fidelity wireframs in Draw.io, and then medium and high-fidelity wireframes in Figma. We also made a concise style guide with app logo, color scheme, and font styles.

#### Low-fidelity Wireframe

![Low-fidelity Wireframe](/readme_images/low_fidelity_wireframe.png)

#### Mid-fidelity Wireframe

![Mid-fidelity Wireframe](/readme_images/mid_fidelity_wireframe.JPG)

#### High-fidelity Wireframe

![High-fidelity Wireframe](/readme_images/hi_fidelity_wireframe.JPG)

### React Component Planning

To help us figure out which React components we needed and how they could be reused, we created this tree diagram.

![React Component Tree](/readme_images/react_component_tree.jpg)

## Project Next Steps <a name="project-next-steps"></a>

### Refactoring Goals

### Goals for New Features

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
