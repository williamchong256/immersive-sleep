import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Data {
  readonly id: string;
  readonly date: string;
  readonly heartRate: string;
  readonly breathing: string;
  readonly efficiency: string;
  readonly duration: string;
  readonly userID: string;
  readonly comment?: string;
  constructor(init: ModelInit<Data>);
  static copyOf(source: Data, mutator: (draft: MutableModel<Data>) => MutableModel<Data> | void): Data;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly Data?: (Data | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}