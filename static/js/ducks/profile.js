import { showNotification } from 'baselayer/components/Notifications';
import promiseAction from '../action_tools';


export const FETCH_USER_PROFILE = 'cesium/FETCH_USER_PROFILE';
export const RECEIVE_USER_PROFILE = 'cesium/FETCH_USER_PROFILE';

export function profileReducer(state={ username: '' }, action) {
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
}

export function fetchUserProfile() {
  return dispatch =>
    promiseAction(
      dispatch,
      FETCH_USER_PROFILE,

      fetch('/baselayer/profile', {
        credentials: 'same-origin'
      })
        .then(response => response.json())
        .then((json) => {
          if (json.status === 'success') {
            dispatch(receiveUserProfile(json.data));
          } else {
            dispatch(
              showNotification(
                'Error downloading user profile ({})'.format(json.message)
              )
            );
          }
          return json;
        }).catch(ex => console.log('fetchUserProfile exception:', ex))
    );
}

function receiveUserProfile(userProfile) {
  return {
    type: RECEIVE_USER_PROFILE,
    payload: userProfile
  };
}
