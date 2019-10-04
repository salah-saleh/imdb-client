import { Reducer } from 'kawax-js';

class User extends Reducer {

  static initialState = {
    id: String(),
    email: String(),
    movies: Array(),
  };

  setUser = (state, { payload }) => ({
    ...payload,
    success: true,
  });

  state = this.matchSuccess({
    LOGIN: this.assign,
    MOVIES: this.assign,
  });

}

export default User;
