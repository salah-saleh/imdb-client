import { Reducer } from 'kawax-js';

class User extends Reducer {

  static initialState = {
    email: String(),
    success: false,
  };

  setUser = (state, { payload }) => ({
    email: payload.email,
    success: true,
  });

  state = this.matchSuccess({
    LOGIN: this.setUser,
  });

}

export default User;
