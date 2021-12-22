/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUrl = /* GraphQL */ `
  query GetUrl($id: ID!) {
    getUrl(id: $id) {
      id
      url
      likes
      dislikes
      createdAt
      updatedAt
    }
  }
`;
export const listUrls = /* GraphQL */ `
  query ListUrls(
    $filter: ModelUrlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        likes
        dislikes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      text
      likes
      url
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        likes
        url
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      avatarUrl
      userName
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
        avatarUrl
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
