// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Data } = initSchema(schema);

export {
  User,
  Data
};