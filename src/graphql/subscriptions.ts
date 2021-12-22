/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUrl = /* GraphQL */ `
  subscription OnCreateUrl {
    onCreateUrl {
      id
      url
      likes
      dislikes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUrl = /* GraphQL */ `
  subscription OnUpdateUrl {
    onUpdateUrl {
      id
      url
      likes
      dislikes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUrl = /* GraphQL */ `
  subscription OnDeleteUrl {
    onDeleteUrl {
      id
      url
      likes
      dislikes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments {
    onCreateComments {
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
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments {
    onUpdateComments {
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
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments {
    onDeleteComments {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      avatarUrl
      userName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      avatarUrl
      userName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      avatarUrl
      userName
      createdAt
      updatedAt
    }
  }
`;
