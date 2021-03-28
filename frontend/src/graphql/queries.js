/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
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
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        owner
      }
      nextToken
    }
  }
`;
