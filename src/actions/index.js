import { UPDATE_MESSAGE,MSG_DATA,GET_MESSAGES } from './Types';



export const getMessageData = () => dispatch => {
   dispatch({
    type: GET_MESSAGES,
    payload: MSG_DATA
   });
}

export const updateMessage = (data) => dispatch => {
    dispatch({
        type: UPDATE_MESSAGE,
        payload: data
      });
}