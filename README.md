# Serverless GraphQL Boilerplate

This is a base project with a structure that includes Serverless Framework, Apollo, TypeScript and Webpack.  
It can be deployed to a lambda on an serverless architecture.  
It also has some nice development features, like Hot Reload.

## Getting Started

1. Clone this project

2. Create the `.env` file from the `.env.example` in the root of the project

3. Run `npm run dev`  
   You will be able to access the api on http://localhost:3000/local/graphql

## Deployment

To deploy the app, just run `npm run deploy:prd`.  
It will deploy to the **profile** and **region** specified in the `.env` file.

## Check the article

https://blog.perfect-base.com/nodejs-serverless-graphql
