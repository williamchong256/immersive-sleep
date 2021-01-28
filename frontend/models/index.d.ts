import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly name: string;
  readonly data?: (Data | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Data {
  readonly id: string;
  readonly title: string;
  readonly user?: User;
  constructor(init: ModelInit<Data>);
  static copyOf(source: Data, mutator: (draft: MutableModel<Data>) => MutableModel<Data> | void): Data;
}