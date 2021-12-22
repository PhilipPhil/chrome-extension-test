export interface IStore {
  comments: Array<IComments>;
  loading: boolean;
  error: string | null;
}

interface IComments{
  avatarUrl: string;
  userName: string;
  reviewScore: string;
  comment: IComment;
}

interface IComment {
  time: string;
  text: string;
  likes: number;
  urlId: string;
  userId: string;
}

export enum CommentActionTypes {
  FETCH_COMMENTS = 'FETCH_COMMENTS',
  FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

interface FetchCommentAction {
  payload: any;
  type: CommentActionTypes.FETCH_COMMENTS;
}

interface FetchCommentSuccessAction {
  type: CommentActionTypes.FETCH_COMMENTS_SUCCESS;
  payload: any[]
}

interface FetchCommentErrorAction {
  type: CommentActionTypes.FETCH_COMMENTS_ERROR;
  payload: string;
}

export type CommentAction = FetchCommentAction | FetchCommentErrorAction | FetchCommentSuccessAction