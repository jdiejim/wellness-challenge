import { LOG_IN, SIGN_UP } from '../utils/constants';

const userReducer = (state={}, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.user;
    case SIGN_UP:
      return action.user;
    default:
      return state;
  }
}

export default userReducer;
