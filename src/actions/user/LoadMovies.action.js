import { Action } from 'kawax-js';
import User from 'resources/user/User';

class LoadMovies extends Action {

  static type = 'USER.MOVIES';

  errorNotice = true;

  call = async () => {
    return User.movies({ userId: this.getState('user.id') });
  };

}

export default LoadMovies;
