/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUrlInput = {
  id?: string | null,
  url?: string | null,
  likes?: number | null,
  dislikes?: number | null,
};

export type ModelUrlConditionInput = {
  url?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelIntInput | null,
  and?: Array< ModelUrlConditionInput | null > | null,
  or?: Array< ModelUrlConditionInput | null > | null,
  not?: ModelUrlConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Url = {
  __typename: "Url",
  id: string,
  url?: string | null,
  likes?: number | null,
  dislikes?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUrlInput = {
  id: string,
  url?: string | null,
  likes?: number | null,
  dislikes?: number | null,
};

export type DeleteUrlInput = {
  id: string,
};

export type CreateCommentsInput = {
  id?: string | null,
  text?: string | null,
  likes?: number | null,
  url?: string | null,
  userId?: string | null,
};

export type ModelCommentsConditionInput = {
  text?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  url?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCommentsConditionInput | null > | null,
  or?: Array< ModelCommentsConditionInput | null > | null,
  not?: ModelCommentsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Comments = {
  __typename: "Comments",
  id: string,
  text?: string | null,
  likes?: number | null,
  url?: string | null,
  userId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCommentsInput = {
  id: string,
  text?: string | null,
  likes?: number | null,
  url?: string | null,
  userId?: string | null,
};

export type DeleteCommentsInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  avatarUrl?: string | null,
  userName?: string | null,
};

export type ModelUserConditionInput = {
  avatarUrl?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  avatarUrl?: string | null,
  userName?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  avatarUrl?: string | null,
  userName?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelUrlFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelIntInput | null,
  and?: Array< ModelUrlFilterInput | null > | null,
  or?: Array< ModelUrlFilterInput | null > | null,
  not?: ModelUrlFilterInput | null,
};

export type ModelUrlConnection = {
  __typename: "ModelUrlConnection",
  items:  Array<Url >,
  nextToken?: string | null,
};

export type ModelCommentsFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  url?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCommentsFilterInput | null > | null,
  or?: Array< ModelCommentsFilterInput | null > | null,
  not?: ModelCommentsFilterInput | null,
};

export type ModelCommentsConnection = {
  __typename: "ModelCommentsConnection",
  items:  Array<Comments >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  avatarUrl?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User >,
  nextToken?: string | null,
};

export type CreateUrlMutationVariables = {
  input: CreateUrlInput,
  condition?: ModelUrlConditionInput | null,
};

export type CreateUrlMutation = {
  createUrl?:  {
    __typename: "Url",
    id: string,
    url?: string | null,
    likes?: number | null,
    dislikes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUrlMutationVariables = {
  input: UpdateUrlInput,
  condition?: ModelUrlConditionInput | null,
};

export type UpdateUrlMutation = {
  updateUrl?:  {
    __typename: "Url",
    id: string,
    url?: string | null,
    likes?: number | null,
    dislikes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUrlMutationVariables = {
  input: DeleteUrlInput,
  condition?: ModelUrlConditionInput | null,
};

export type DeleteUrlMutation = {
  deleteUrl?:  {
    __typename: "Url",
    id: string,
    url?: string | null,
    likes?: number | null,
    dislikes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentsMutationVariables = {
  input: CreateCommentsInput,
  condition?: ModelCommentsConditionInput | null,
};

export type CreateCommentsMutation = {
  createComments?:  {
    __typename: "Comments",
    id: string,
    text?: string | null,
    likes?: number | null,
    url?: string | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentsMutationVariables = {
  input: UpdateCommentsInput,
  condition?: ModelCommentsConditionInput | null,
};

export type UpdateCommentsMutation = {
  updateComments?:  {
    __typename: "Comments",
    id: string,
    text?: string | null,
    likes?: number | null,
    url?: string | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentsMutationVariables = {
  input: DeleteCommentsInput,
  condition?: ModelCommentsConditionInput | null,
};

export type DeleteCommentsMutation = {
  deleteComments?:  {
    __typename: "Comments",
    id: string,
    text?: string | null,
    likes?: number | null,
    url?: string | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUrlQueryVariables = {
  id: string,
};

export type GetUrlQuery = {
  getUrl?:  {
    __typename: "Url",
    id: string,
    url?: string | null,
    likes?: number | null,
    dislikes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUrlsQueryVariables = {
  filter?: ModelUrlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUrlsQuery = {
  listUrls?:  {
    __typename: "ModelUrlConnection",
    items:  Array< {
      __typename: "Url",
      id: string,
      url?: string | null,
      likes?: number | null,
      dislikes?: number | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentsQueryVariables = {
  id: string,
};

export type GetCommentsQuery = {
  getComments?:  {
    __typename: "Comments",
    id: string,
    text?: string | null,
    likes?: number | null,
    url?: string | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentsConnection",
    items:  Array< {
      __typename: "Comments",
      id: string,
      text?: string | null,
      likes?: number | null,
      url?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUrlSubscription = {
  onCreateUrl?:  {
    __typename: "Url",
    id: string,
    url?: string | null,
    likes?: number | null,
    dislikes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUrlSubscription = {
  onUpdateUrl?:  {
    __typename: "Url",
    id: string,
    url?: string | null,
    likes?: number | null,
    dislikes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUrlSubscription = {
  onDeleteUrl?:  {
    __typename: "Url",
    id: string,
    url?: string | null,
    likes?: number | null,
    dislikes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentsSubscription = {
  onCreateComments?:  {
    __typename: "Comments",
    id: string,
    text?: string | null,
    likes?: number | null,
    url?: string | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentsSubscription = {
  onUpdateComments?:  {
    __typename: "Comments",
    id: string,
    text?: string | null,
    likes?: number | null,
    url?: string | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentsSubscription = {
  onDeleteComments?:  {
    __typename: "Comments",
    id: string,
    text?: string | null,
    likes?: number | null,
    url?: string | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
