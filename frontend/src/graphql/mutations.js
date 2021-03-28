/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      createdAt
      updatedAt
      owner
      days {
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      createdAt
      updatedAt
      owner
      days {
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      createdAt
      updatedAt
      owner
      days {
        nextToken
      }
    }
  }
`;
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
      id
      date
      breathing
      heartRate
      duration
      efficiency
      comment
      userID
      createdAt
      updatedAt
      user {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
      id
      date
      breathing
      heartRate
      duration
      efficiency
      comment
      userID
      createdAt
      updatedAt
      user {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
      id
      date
      breathing
      heartRate
      duration
      efficiency
      comment
      userID
      createdAt
      updatedAt
      user {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
