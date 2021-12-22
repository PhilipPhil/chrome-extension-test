import {CommentAction, CommentActionTypes} from "../../types/comment";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchComments = () => {
    return async (dispatch: Dispatch<CommentAction>) => {
        try {
            // dispatch({type: CommentActionTypes.FETCH_COMMENTS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: CommentActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: CommentActionTypes.FETCH_COMMENTS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}