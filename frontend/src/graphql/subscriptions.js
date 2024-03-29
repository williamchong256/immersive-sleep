/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      name
      email
      phoneNumber
      days {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      name
      email
      phoneNumber
      days {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      name
      email
      phoneNumber
      days {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($owner: String!) {
    onCreateDay(owner: $owner) {
      id
      date
      breathing
      heartRate
      duration
      efficiency
      comment
      userID
      user {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($owner: String!) {
    onUpdateDay(owner: $owner) {
      id
      date
      breathing
      heartRate
      duration
      efficiency
      comment
      userID
      user {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($owner: String!) {
    onDeleteDay(owner: $owner) {
      id
      date
      breathing
      heartRate
      duration
      efficiency
      comment
      userID
      user {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
