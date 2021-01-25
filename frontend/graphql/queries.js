/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      data {
        items {
          id
          title
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
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
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getData = /* GraphQL */ `
  query GetData($id: ID!) {
    getData(id: $id) {
      id
      title
      userID
      user {
        id
        name
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDatas = /* GraphQL */ `
  query ListDatas(
    $filter: ModelDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
