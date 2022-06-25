# Serverless GraphQL Boilerplate

This is a project created to be the base for my future projects.  
It has a basic structure for an Apollo GraphQL project, and it can be deployed to a lambda on an serverless architecture.  
It also has some nice development features, like Hot Reload.

## Getting Started

1. Clone this project

2. Create the `.env` file from the `.env.example` in the root of the project

3. Run `npm run dev`  
   You will be able to access the api on http://localhost:3000/local/graphql

## Deployment

To deploy the app, just run `npm run deploy:prd`.  
It will deploy to the **profile** and **region** specified in the `.env` file.
