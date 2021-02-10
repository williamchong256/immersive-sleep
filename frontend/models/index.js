// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Data, User } = initSchema(schema);

export {
  Data,
  User
};