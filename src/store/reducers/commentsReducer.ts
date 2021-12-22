import {CommentAction, CommentActionTypes, IStore} from "../../types/comment";

const initialState: IStore = {
  comments: [
    {
      avatarUrl: "",
      userName: "Van Nga",
      reviewScore: "19K",
      comment: {
        time: "14 min",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        likes: 2,
        urlId: "",
        userId: ""
      }
    },
  ],
  loading: false,
  error: null
}

export const commentReducer = (state = initialState, action: CommentAction): IStore => {
    switch (action.type) {
        case CommentActionTypes.FETCH_COMMENTS:
            return {...state, comments: action.payload}
        case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
            return {loading: false, error: null, comments: action.payload}
        case CommentActionTypes.FETCH_COMMENTS_ERROR:
            return {loading: false, error: action.payload, comments: []}
        default:
            return state
    }
}