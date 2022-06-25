import express from 'express';
import { ApolloServer, gql } from 'apollo-server-lambda';
import { IncomingMessage, OutgoingMessage } from 'http';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  context: ({ express }): Context => {
    return { req: express.req, res: express.res };
  },
});

export interface Context {
  req: IncomingMessage;
  res: OutgoingMessage;
}

export const main = apolloServer.createHandler({
  expressAppFromMiddleware(middleware) {
    const app = express();
    // Enable CORS for all methods
    app.use(function (_req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });
    app.use(middleware);
    return app;
  },
});
