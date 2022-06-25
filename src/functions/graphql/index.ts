import { getAPIBaseInfo } from '@libs/helpers/lambdaHelper';

const { handlerDir, cors } = getAPIBaseInfo(__dirname);

const slsFunc = {
  handler: `${handlerDir}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'graphql',
        cors: cors,
      },
    },
    {
      http: {
        method: 'post',
        path: 'graphql',
        cors: cors,
      },
    },
  ],
};

export default slsFunc;
