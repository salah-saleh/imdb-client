import { Reducer } from 'kawax-js';
import User from 'reducers/user/User';

class Root extends Reducer {

  static initialState = {
    user: User.delegate(),
  };

  state = this.match({
    'USER': {
      user: User.delegate(),
    },
  });
}

export default Root;
